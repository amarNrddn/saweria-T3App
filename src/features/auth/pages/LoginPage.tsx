import { PageContainer } from "~/components/layout/PageContainer"
import { SectionContainer } from "~/components/layout/SectionContainer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Form } from "~/components/ui/form"
import { RegisterFormInert } from "../components/RegisterFormIner"
import { Button } from "~/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { RegisterFormSchema, registerFormSchema } from "../forms/register"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "~/utils/api"
import { supabase } from "~/lib/supabase/client"
import { AuthError } from "@supabase/supabase-js"
import { SupabaseAuthErrorCode } from "~/lib/supabase/authErrorCodes"

const LoginPage = () => {
   const form = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

   const { mutate: registerUser, isPending: registerUserIsPending } = api.auth.register.useMutation({
      onSuccess: () => {
         toast("Berhasil silahkan login")
         form.setValue("email", "")
         form.setValue("password", "")
      },
      onError: () => {
         toast.error("ada kesalahan, cek kembali!")
      }
   })

   const handleOnLogin = async (values: RegisterFormSchema) => {
      try {
         const { error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password
         })

         if (error) throw error

      } catch (error) {
         switch ((error as AuthError).code) {
            case SupabaseAuthErrorCode.invalid_credentials:
               form.setError("email", { message: "Email atau password salah" });
               form.setError("password", { message: "Email atau password salah", });
               break;
            case SupabaseAuthErrorCode.email_not_confirmed:
               form.setError("email", { message: "Email belum diverifikasi" });
               break;
            default:
               toast.error("Sebuah kesalahan terjadi, coba lagi beberapa saat.");
         }
      }
   }
   return (
      <PageContainer>
         <SectionContainer
            padded
            className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
         >
            <Card className="w-full max-w-[480px] self-center">
               <CardHeader className="flex flex-col justify-center items-center">
                  <CardTitle className="text-2xl">Silahkan Logi👋</CardTitle>
                  <p className="text-muted-foreground">Sawer kreator kesukaanmu</p>
               </CardHeader>
               <CardContent>
                  <Form {...form} >
                     <RegisterFormInert
                        isLoading={registerUserIsPending}
                        onRegisterSubmit={handleOnLogin}
                        button="Login"
                     />
                  </Form>
               </CardContent>

               <CardFooter className="flex flex-col gap-4">
                  <div className="flex w-full items-center gap-4">
                     <div className="h-[2px] border w-full border-t-2"></div>
                     <p className="text-nowrap">Atau lanjut dengan</p>
                     <div className="h-[2px] border w-full border-t-2"></div>
                  </div>

                  <Button variant="secondary" className="w-full">
                     <FcGoogle />
                     Buat akun dengan Google
                  </Button>

                  <p className="text-muted-foreground">
                     Belum punya akun? <Link href={"/register"} className="text-purple-600 font-bold">Buat</Link>
                  </p>
               </CardFooter>
            </Card>
         </SectionContainer>
      </PageContainer>
   )
}

export default LoginPage
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import { RegisterFormInert } from "../components/RegisterFormIner";
import { RegisterFormSchema, registerFormSchema } from "../forms/register";
import { api } from "~/utils/api";
import { toast } from "sonner";

const RegisterPage = () => {
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

   const handleOnRegister = (values: RegisterFormSchema) => {
      registerUser(values)
   }

   return (
      <PageContainer>
         <SectionContainer
            padded
            className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
         >
            <Card className="w-full max-w-[480px] self-center">
               <CardHeader className="flex flex-col justify-center items-center">
                  <CardTitle className="text-2xl">Buat Akun</CardTitle>
                  <p className="text-muted-foreground">Sawer kreator kesukaanmu</p>
               </CardHeader>
               <CardContent>
                  <Form {...form} >
                     <RegisterFormInert
                        isLoading={registerUserIsPending}
                        onRegisterSubmit={handleOnRegister}
                        showPassword
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
                     Login akun dengan Google
                  </Button>

                  <p className="text-muted-foreground">
                     Sudah punya akun? <Link href={"/login"} className="text-purple-600 font-bold">Login</Link>
                  </p>
               </CardFooter>
            </Card>
         </SectionContainer>
      </PageContainer>
   )
}

export default RegisterPage
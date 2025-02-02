import { useForm } from "react-hook-form";
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
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterFormSchema, registerFormSchema } from "../forms/register";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { RegisterFormInert } from "../components/RegisterFormIner";

const RegisterPage = () => {
   const form = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

   const handleOnRegister = (values: RegisterFormSchema) => {
      alert("register succes!")
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
                     <RegisterFormInert onRegisterSubmit={handleOnRegister} />
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
                     Sudah punya akun? <Link href={"/login"} className="text-purple-600 font-bold">Login</Link>
                  </p>
               </CardFooter>
            </Card>
         </SectionContainer>
      </PageContainer>
   )
}

export default RegisterPage
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"

import { RegisterFormSchema } from "../forms/register"

type RegisterFormInertProps = {
   onRegisterSubmit: (values: RegisterFormSchema) => void
}

export const RegisterFormInert = (props: RegisterFormInertProps) => {
   const form = useFormContext<RegisterFormSchema>()
   const [showPassword, setShowPassword] = useState<boolean>(false)
   
   return (
      <form
         onSubmit={form.handleSubmit(props.onRegisterSubmit)}
         className="space-y-5"
      >
         <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                     <Input placeholder="Masukan Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                     <Input placeholder="Masukan Password" type={showPassword ? "text" : "password"} {...field} />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <label className="flex items-center gap-2 mt-4">
            <Checkbox
               checked={showPassword}
               onCheckedChange={(checked) => setShowPassword(!!checked)}
            />
            Show Password
         </label>

         <Button className="w-full mt-4">Buat Akun</Button>
      </form>
   )
}
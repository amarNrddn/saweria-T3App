import { type } from 'os'
import { z } from 'zod'
import { EmailSchemas, PasswordSchemas } from '~/schemas/auth'

export const registerFormSchema = z.object({
   email: EmailSchemas,
   password: PasswordSchemas
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
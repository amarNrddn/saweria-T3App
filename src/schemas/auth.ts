import { z } from "zod"

export const PasswordSchemas = z
   .string({ message: "Password wajib di isi" })
   .min(8, { message: "Paaword minimal 8 karakter" })
   .regex(/[a-z]/, { message: "Password minimal 1 huruf kecil" })
   .regex(/[A-Z]/, { message: "Password minimal 1 huruf besar" })
   .regex(/[0-9]/, { message: "Password minimal 1 angka" })

export const EmailSchemas = z
   .string({ message: "Email wajib diisi" })
   .email({ message: "Format email tidak tepat" })
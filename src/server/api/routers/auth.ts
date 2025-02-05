import { generateFromEmail } from "unique-username-generator";
import { z } from "zod";
import { supabaseAdminClient } from "~/lib/supabase/server";
import { PasswordSchemas } from "~/schemas/auth";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
   register: publicProcedure
      .input(
         z.object({
            email: z.string().email().toLowerCase(),
            password: PasswordSchemas
         })
      )
      .mutation(async ({ ctx, input }) => {
         const { db } = ctx
         const { email, password } = input

         // create user in supabase
         // duplicate profile table
         // if user failed to created, delet user from supabase
         await db.$transaction(async (tx) => {
            let userId = ""
            try {
               const { data, error } = await supabaseAdminClient.auth.admin.createUser({
                  email,
                  password
               })

               if (data.user) {
                  userId = data.user.id
               }

               if (error) throw error

               const generateUserName = generateFromEmail(email)

               await tx.profile.create({
                  data: {
                     email,
                     userId: data.user.id,
                     username: generateUserName
                  }
               })
            } catch (error) {
               console.log(error)
               await supabaseAdminClient.auth.admin.deleteUser(userId)
            }
         })
      })
})
import NextAuth from "next-auth"
// import log from "logging-service"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "@/utils/password"
// import { getUserFromDb } from "@/utils/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/sign-in", // Custom sign-in page
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (c) => {
        if (c.password !== "password") return null
        return {
          id: "test-id",
          name: "AKS",
          email: "test@example.com",
        }
      },
    }),
  ],
})
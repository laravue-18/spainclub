import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      credentials: {
        id: {},
        email: {}
      },
      authorize: async (c) => {
        if (!c) return null;

        // Ensure id and email are strings or undefined
        const id = typeof c.id === "string" ? c.id : undefined;
        const email = typeof c.email === "string" ? c.email : undefined;

        if (!id || !email) return null;

        return {
          id,
          email,
        };
      },
    }),
  ],
})
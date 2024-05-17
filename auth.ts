import { signInSchema } from "@/lib/zod";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = { id: "2", username: "csAdmin" };
        const adminPassword = process.env.ADMIN_PASSWORD!;

        console.log("credentials", credentials);
        console.log("adminPassword", adminPassword);
        const { username, password } =
          await signInSchema.parseAsync(credentials);
        // logic to salt and hash password
        if (username !== "csAdmin" || password !== adminPassword) {
          return null;
        }

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          return null;
        }
        // return user object with the their profile data
        return user;
      },
    }),
  ],
});

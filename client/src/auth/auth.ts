import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30 days
  },
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    async session({session}) {
      console.log(session)
      return session
    },
    async signIn({profile , user, account}) {
      // console.log(profile)
      // console.log(user)
      // console.log(account)
      try {
        return true
      } catch (error) {
        return false
      }
    }
  },
  providers: [GitHub, Google],
})


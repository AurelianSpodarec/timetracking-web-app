import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { IAuthLogin, authLogin } from "./services/apis/requests/auth"

interface IUserData {
  avatar: string;
  acronym: null;
  id: number;
  username: null;
  name: string;
  email: string;
  status: string;
  joined: string;
}

interface IApiResponse {
  status: string;
  message: null;
  cookies: string;
  data: {
    user: IUserData;
    token: string;
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: IAuthLogin, req: IApiResponse) => {
        console.log("woooop", credentials)
        const { email, password } = credentials
        const res:IApiResponse = await authLogin({
          email,
          password,
        })

        if (!res) {
          throw new Error("User not found.")
        }

        const data = res?.data
        const user = data?.user

        return {
          token: data.token,
          user
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token.user) {
        session.user = token.user;
      }
      return session
    },
    async jwt({ token, user }) {

      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
  }
})

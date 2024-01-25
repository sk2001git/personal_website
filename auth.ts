import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import clientPromise from "./MongodbClient"
import authConfig from "./auth.config"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt"},
  ...authConfig, 
  
})
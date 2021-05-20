import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ]
})
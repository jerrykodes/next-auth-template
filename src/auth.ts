import { prisma } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GoogleProvider],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
})

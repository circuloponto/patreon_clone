import { PrismaClient } from '../../../src/generated/prisma';
import { Adapter } from 'next-auth/adapters';

export function PrismaAdapter(prisma: PrismaClient): Adapter {
  return {
    createUser: async (data) => {
      const user = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          emailVerified: data.emailVerified,
          image: data.image,
          role: 'supporter', // Default role for OAuth users
        },
      });
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        role: user.role,
      };
    },
    getUser: async (id) => {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      if (!user) return null;
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        role: user.role,
      };
    },
    getUserByEmail: async (email) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (!user) return null;
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        role: user.role,
      };
    },
    getUserByAccount: async ({ providerAccountId, provider }) => {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: { user: true },
      });
      if (!account) return null;
      const { user } = account;
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        role: user.role,
      };
    },
    updateUser: async (data) => {
      const user = await prisma.user.update({
        where: { id: data.id },
        data,
      });
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        role: user.role,
      };
    },
    deleteUser: async (userId) => {
      await prisma.user.delete({
        where: { id: userId },
      });
    },
    linkAccount: async (data) => {
      await prisma.account.create({
        data,
      });
    },
    unlinkAccount: async ({ providerAccountId, provider }) => {
      await prisma.account.delete({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
      });
    },
    createSession: async (data) => {
      const session = await prisma.session.create({
        data,
      });
      return session;
    },
    getSessionAndUser: async (sessionToken) => {
      const session = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!session) return null;
      const { user } = session;
      return {
        session,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
          role: user.role,
        },
      };
    },
    updateSession: async (data) => {
      const session = await prisma.session.update({
        where: { sessionToken: data.sessionToken },
        data,
      });
      return session;
    },
    deleteSession: async (sessionToken) => {
      await prisma.session.delete({
        where: { sessionToken },
      });
    },
    createVerificationToken: async (data) => {
      const verificationToken = await prisma.verificationToken.create({
        data,
      });
      return verificationToken;
    },
    useVerificationToken: async (params) => {
      try {
        const verificationToken = await prisma.verificationToken.delete({
          where: {
            identifier_token: {
              identifier: params.identifier,
              token: params.token,
            },
          },
        });
        return verificationToken;
      } catch (error) {
        // If token is not found, return null
        return null;
      }
    },
  };
}

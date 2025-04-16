import { PrismaClient } from '../../../src/generated/prisma';
import { Adapter, AdapterSession, AdapterUser } from 'next-auth/adapters';

interface CreateUserData {
  name?: string | null;
  email: string;
  emailVerified?: Date | null;
  image?: string | null;
}

interface AccountData {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
}

interface UnlinkAccountData {
  providerAccountId: string;
  provider: string;
}

interface SessionData {
  sessionToken: string;
  userId: string;
  expires: Date;
}

interface SessionUpdateData {
  sessionToken: string;
  userId?: string;
  expires?: Date;
}

interface UpdateUserData {
  id: string;
  name?: string | null;
  email?: string;
  image?: string | null;
  emailVerified?: Date | null;
}

interface VerificationTokenData {
  identifier: string;
  token: string;
  expires: Date;
}

export function PrismaAdapter(prisma: PrismaClient): Adapter {
  return {
    createUser: async (data: CreateUserData) => {
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
    getUser: async (id: string) => {
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
    getUserByEmail: async (email: string) => {
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
    getUserByAccount: async (params: { providerAccountId: string; provider: string }) => {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider: params.provider,
            providerAccountId: params.providerAccountId,
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
    updateUser: async (data: UpdateUserData) => {
      // Extract the id from data and create a new object without id for the update
      const { id, ...userData } = data;
      
      const user = await prisma.user.update({
        where: { id },
        data: userData,
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
    deleteUser: async (userId: string) => {
      await prisma.user.delete({
        where: { id: userId },
      });
    },
    linkAccount: async (data: AccountData) => {
      await prisma.account.create({
        data,
      });
    },
    unlinkAccount: async (data: UnlinkAccountData) => {
      await prisma.account.delete({
        where: {
          provider_providerAccountId: {
            provider: data.provider,
            providerAccountId: data.providerAccountId,
          },
        },
      });
    },
    createSession: async (data: SessionData) => {
      const session = await prisma.session.create({
        data,
      });
      return session;
    },
    getSessionAndUser: async (sessionToken: string) => {
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
    updateSession: async (data: SessionUpdateData) => {
      const session = await prisma.session.update({
        where: { sessionToken: data.sessionToken },
        data,
      });
      return session;
    },
    deleteSession: async (sessionToken: string) => {
      await prisma.session.delete({
        where: { sessionToken },
      });
    },
    createVerificationToken: async (data: VerificationTokenData) => {
      const verificationToken = await prisma.verificationToken.create({
        data,
      });
      return verificationToken;
    },
    useVerificationToken: async (params: { identifier: string; token: string }) => {
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

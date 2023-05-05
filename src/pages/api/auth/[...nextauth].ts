import prisma from '../../../../lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { ethers } from 'ethers';
import NextAuth, { AuthOptions, RequestInternal } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

async function authorizeCrypto(
  credentials: Record<'publicAddress' | 'signedNonce', string> | undefined,
  req: Pick<RequestInternal, 'body' | 'headers' | 'method' | 'query'>
) {
  if (!credentials) return null;

  const { publicAddress, signedNonce } = credentials;

  const user = await prisma.user.findUnique({
    where: { publicAddress },
    include: { cryptoLoginNonce: true },
  });

  if (!user?.cryptoLoginNonce) return null;

  const signerAddress = ethers.verifyMessage(user.cryptoLoginNonce.nonce, signedNonce);

  if (signerAddress !== publicAddress) return null;

  if (user.cryptoLoginNonce.expires < new Date()) return null;

  await prisma.cryptoLoginNonce.delete({ where: { userId: user.id } });

  return {
    id: user.id,
    publicAddress: user.publicAddress,
  };
}

// see: https://next-auth.js.org/configuration/options
export const authOptions: AuthOptions = {
  // Setting error and signin pages to our /auth custom page
  pages: {
    signIn: '/auth',
    error: '/auth',
  },
  providers: [
    // see: https://next-auth.js.org/configuration/providers/credentials
    CredentialsProvider({
      id: 'crypto',
      name: 'Crypto Wallet Auth',
      credentials: {
        publicAddress: { label: 'Public Address', type: 'text' },
        signedNonce: { label: 'Signed Nonce', type: 'text' },
      },
      authorize: authorizeCrypto,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  // Due to a NextAuth bug, the default database strategy is no usable
  //  with CredentialsProvider, so we need to set strategy to JWT
  session: {
    strategy: 'jwt',
  },
  // Setting secret here for convenience, do not use this in production
  secret: 'DO_NOT_USE_THIS_IN_PROD',
};

export default NextAuth(authOptions);

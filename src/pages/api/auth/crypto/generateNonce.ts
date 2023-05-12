import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../lib/prisma';
import crypto from 'crypto';

export default async function generateNonce(req: NextApiRequest, res: NextApiResponse) {
  const { publicAddress } = req.body;

  const nonce = crypto.randomBytes(32).toString('hex');

  // Set the expiry of the nonce to 1 hour
  const expires: Date = new Date(new Date().getTime() + 1000 * 60 * 60);

  // Create or update the nonce for the given user
  await prisma.user.upsert({
    where: { publicAddress },
    create: {
      publicAddress,
      cryptoLoginNonce: {
        create: {
          nonce,
          expires,
        },
      },
    },
    update: {
      cryptoLoginNonce: {
        upsert: {
          create: {
            nonce,
            expires,
          },
          update: {
            nonce,
            expires,
          },
        },
      },
    },
  });

  return res.status(200).json({
    nonce,
    expires: expires.toISOString(),
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllContractsFromPublicWalletAddress } from './service/userLibraryService';

type SuccessResponse = {
  userContracts: string[];
};

type ErrorResponse = {
  error: string;
  userContracts?: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method === 'POST') {
    const publicAddress: string = req.query.id as string;
    const userContracts: string[] = await getAllContractsFromPublicWalletAddress(publicAddress);
    return res.status(200).json({ userContracts });
  } else {
    return res.status(400).json({ error: 'Bad request' });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../../lib/prisma';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import dotenv from 'dotenv';
import ContractList from '../../../../../../build/contracts/ContractList.json';
dotenv.config();

const getAllContractsFromPublicWalletAddress = async (publicWalletAddress: string) => {
  const contractListAddress: string = process.env.CONTRACT_LIST_ADDRESS;
  const contractListABI = ContractList.abi;
  if (!contractListAddress || !contractListABI) {
    throw new Error('Contract could not be built');
  }
  const web3BlockchainUrl: Web3 = new Web3(process.env.WEB3_URL);

  const contract: Contract = new web3BlockchainUrl.eth.Contract(
    contractListABI as AbiItem[],
    contractListAddress
  );
  return await contract.methods.getContracts(publicWalletAddress).call();
};

const matchContractsToGamesInDatabase = async (contracts: string[]) => {
  const games = await prisma.game.findMany({
    where: {
      contractAddress: {
        in: contracts,
      },
    },
  });
  return games;
}

export default async function getGameLibrary(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Bad request' });
  }
  const publicAddress: string = req.query.id as string;
  try {
    const userContracts: string[] = await getAllContractsFromPublicWalletAddress(publicAddress);
    const userGames = await matchContractsToGamesInDatabase(userContracts);
    return res.status(200).json({ userGames });
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ error: 'Internal server error, couldnt retrieve the users library' });
  }
}

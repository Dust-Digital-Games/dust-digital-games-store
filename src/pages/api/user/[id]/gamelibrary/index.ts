import type { NextApiRequest, NextApiResponse } from 'next';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import dotenv from 'dotenv';
dotenv.config();

type SuccessResponse = {
  userContracts: string[];
};

type ErrorResponse = {
  error: string;
  userContracts?: string[];
};

export const getAllContractsFromPublicWalletAddress = async (publicWalletAddress: string) => {
  const contractAddress: string = process.env.CONTRACT_ADDRESS;
  const contractABI: AbiItem[] = [
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
      name: 'addContract',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'contracts',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'userAddress', type: 'address' }],
      name: 'getContracts',
      outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_contractAddress', type: 'address' }],
      name: 'removeContract',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
  const web3: Web3 = new Web3(process.env.WEB3_URL);
  const contract: Contract = new web3.eth.Contract(contractABI, contractAddress);
  return await contract.methods.getContracts(publicWalletAddress).call();
};

export default async function getAllContracts(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Bad request' });
  }

  const publicAddress: string = req.query.id as string;
  try {
    const userContracts: string[] = await getAllContractsFromPublicWalletAddress(publicAddress);
    return res.status(200).json({ userContracts });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: 'Internal server error, couldnt retrieve the users library' });
  }
}

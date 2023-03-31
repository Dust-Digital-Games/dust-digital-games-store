import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import dotenv from 'dotenv';
import { Logger, ILogObj } from 'tslog';
import { appendFileSync } from 'fs';
dotenv.config();

const log: Logger<ILogObj> = new Logger({
  name: 'CommunicatorService',
});

function logToTransport(logObject: ILogObj) {
  appendFileSync('./logs/logs.log', JSON.stringify(logObject) + '\n');
}

logToTransport({ name: 'CommunicatorService', type: 'info', msg: 'Test' });

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
  log.warn('contract', 'Test');
  return await contract.methods.getContracts(publicWalletAddress).call();
};

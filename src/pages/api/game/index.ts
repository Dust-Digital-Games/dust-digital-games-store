import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { Game } from '@prisma/client';

type GameCategories = [
  {
    id: number;
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    await getAllGames(res);

  } else if (req.method === 'POST') {
    await uploadNewGame(req, res);
    
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

async function getAllGames(res: NextApiResponse) {
  try {
    const games: Game[] = await prisma.game.findMany();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function uploadNewGame(req: NextApiRequest, res: NextApiResponse) {
  const gameData = req.body;
  const gameCategories: GameCategories = gameData.categories.connect;

  try {
    const game = await prisma.game.create({
      data: {
        contractAddress: gameData.contractAddress,
        game_name: gameData.gameName,
        description: gameData.description,
        image: gameData.image,
        download_link: gameData.downloadLink,
        categories: {
          connect: gameCategories,
        },
      },
      include: { categories: true },
    });
    return res.status(200).json([{ message: 'Game uploaded' }, { game: game }]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}



import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

type GameCategories = [
  {
    id: number;
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const games = await prisma.game.findMany();
      return res.status(200).json(games);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

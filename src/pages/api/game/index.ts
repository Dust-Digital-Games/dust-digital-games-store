import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

interface CategoryData {
  id: number;
}

export default async function uploadGame(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const gameData = req.body;
    const categoriesData: CategoryData[] = gameData.categories.connect;
    try {
      const game = await prisma.game.create({
        data: {
          contract: gameData.contractAddress,
          game_name: gameData.gameName,
          description: gameData.description,
          image: gameData.image,
          download_link: gameData.downloadLink,
          categories: {
            connect: categoriesData.map(category => ({ id: category.id })),
          },
          GameCategory: {
            connect: categoriesData.map(category => ({ id: category.id })),
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
    return res.status(400).json({ error: 'Bad request' });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function uploadGame(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const gameData = req.body;
    const game = await prisma.game.create({
      data: {
        contract: gameData.contractAddress,
        game_name: gameData.gameName,
        categoryId: gameData.categoryId,
        description: gameData.description,
        image: gameData.image,
        download_link: gameData.downloadLink,
      },
    });
    return res.status(200).json([{ message: 'Game uploaded' }, { game: game }]);
  } else {
    return res.status(400).json({ error: 'Bad request' });
  }
}

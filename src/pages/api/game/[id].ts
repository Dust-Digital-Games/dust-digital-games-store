import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function downloadGame(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const gameId: number = Number(req.query.id);

    const response = await prisma.game.findFirst({
      where: {
        id: gameId,
      },
      select: {
        contract: true,
        game_name: true,
        description: true,
        image: true,
        download_link: true,
        categories: true,
      },
    });

    if (response === null) {
      return res.status(404).json({ error: 'Game not found' });
    }

    return res.status(200).json(response);
  } else {
    return res.status(400).json({ error: 'Bad request' });
  }
}

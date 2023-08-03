import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function downloadGame(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Bad request' });
  }
  const gameId: number = Number(req.query.id);

  const response = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    select: {
      contractAddress: true,
      game_name: true,
      description: true,
      rating: true,
      image: true,
      download_link: true,
      categories: true,
    },
  });
  
  console.log(typeof response.rating);
  
  if (response === null) {
    return res.status(404).json({ error: 'Game not found' });
  }

  return res.status(200).json(response);
}

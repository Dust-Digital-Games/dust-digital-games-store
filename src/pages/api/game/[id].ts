import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

/**
 * @swagger
 * /api/game/{id}:
 *   get:
 *     description: Download a game
 *     responses:
 *       200:
 *         description: Game downloaded
 *      404:
 *      description: Game not found
 */
export default async function downloadGame(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(400).json({ error: 'Bad request' });
  }
  const gameId: number = Number(req.query.id);

  const response = await prisma.game.findUnique({
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
}

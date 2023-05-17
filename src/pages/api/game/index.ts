import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

type GameCategories = [
  {
    id: number;
  }
];

/**
 * @swagger
 * /api/game:
 *   post:
 *     description: Upload a game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gameName:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: url
 *               downloadLink:
 *                 type: string
 *               contractAddress:
 *                 type: string
 *                 format: ethereum-address
 *               categories:
 *                 type: object
 *                 properties:
 *                   connect:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *             required:
 *               - gameName
 *               - description
 *               - image
 *               - downloadLink
 *               - contractAddress
 *               - categories
 *     responses:
 *       200:
 *         description: Game uploaded
 */
export default async function uploadGame(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Bad request' });
  }

  const gameData = req.body;
  const gameCategories: GameCategories = gameData.categories.connect;

  try {
    const game = await prisma.game.create({
      data: {
        contract: gameData.contractAddress,
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

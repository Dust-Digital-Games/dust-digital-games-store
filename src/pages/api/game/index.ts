import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { Game } from '@prisma/client';
import { Logger, ILogObj } from "tslog";
const log: Logger<ILogObj> = new Logger();
const GAMES_PER_PAGE = 5;

type GameCategories = [
  {
    id: number;
  }
];

type PaginatedGames = {
  page: number;
  games: Game[];
}

type ErrorResponse  = {
  error: string;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    await getAllGames(res, req);

  } else if (req.method === 'POST') {
    await uploadNewGame(req, res);
    
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

async function getAllGames(res: NextApiResponse<PaginatedGames | ErrorResponse>, req: NextApiRequest) {

  const page = Number(req.query.page) || 1;

  if(page < 0) return res.status(400).json({ error: 'Invalid page number' })

  try {
    const games: Game[] = await prisma.game.findMany({
      skip: (page - 1) * GAMES_PER_PAGE,
      take: GAMES_PER_PAGE,
    });

    const paginatedGames: PaginatedGames = {
      page: page,
      games: games,
    }
    return res.status(200).json(paginatedGames);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
    log.error(error);
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
    res.status(500).send({ error: 'Internal Server Error' });
    log.error(error);
  }
}



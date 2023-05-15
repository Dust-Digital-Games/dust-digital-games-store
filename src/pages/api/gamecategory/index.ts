import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function uploadCategory(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Bad request' });
  }

  const categoryData = req.body;

  try {
    const category = await prisma.category.create({
      data: {
        category_name: categoryData.categoryName,
        description: categoryData.categoryDescription, 
        image: categoryData.categoryImage, 
        },
      },
    );
    return res.status(200).json([{ message: 'Category uploaded' }, { category: category }]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}



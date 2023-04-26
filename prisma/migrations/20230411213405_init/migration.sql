-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "contract" TEXT NOT NULL,
    "contract_abi" TEXT NOT NULL,
    "game_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "download_link" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

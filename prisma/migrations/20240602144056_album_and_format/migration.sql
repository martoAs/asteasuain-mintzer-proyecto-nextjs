-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "new" TEXT,
    "artist" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Format" (
    "key" SERIAL NOT NULL,
    "id" INTEGER NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "Format_pkey" PRIMARY KEY ("key")
);

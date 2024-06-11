/*
  Warnings:

  - You are about to drop the column `albumId` on the `Format` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[format]` on the table `Format` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Format" DROP CONSTRAINT "Format_albumId_fkey";

-- AlterTable
ALTER TABLE "Format" DROP COLUMN "albumId";

-- CreateTable
CREATE TABLE "_AlbumToFormat" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToFormat_AB_unique" ON "_AlbumToFormat"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToFormat_B_index" ON "_AlbumToFormat"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Format_format_key" ON "Format"("format");

-- AddForeignKey
ALTER TABLE "_AlbumToFormat" ADD CONSTRAINT "_AlbumToFormat_A_fkey" FOREIGN KEY ("A") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToFormat" ADD CONSTRAINT "_AlbumToFormat_B_fkey" FOREIGN KEY ("B") REFERENCES "Format"("key") ON DELETE CASCADE ON UPDATE CASCADE;

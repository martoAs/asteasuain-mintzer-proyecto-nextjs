/*
  Warnings:

  - You are about to drop the column `id` on the `Format` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `albumId` to the `Format` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Format" DROP COLUMN "id",
ADD COLUMN     "albumId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Format" ADD CONSTRAINT "Format_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

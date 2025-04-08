/*
  Warnings:

  - The primary key for the `FinalizedOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "FinalizedOrder" DROP CONSTRAINT "FinalizedOrder_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "FinalizedOrder_pkey" PRIMARY KEY ("id");

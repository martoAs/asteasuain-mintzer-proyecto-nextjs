-- CreateTable
CREATE TABLE "FinalizedOrder" (
    "id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "FinalizedOrder_pkey" PRIMARY KEY ("id")
);

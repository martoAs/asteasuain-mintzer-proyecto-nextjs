'use server';
import { prisma } from '../../../lib/prisma';

export async function addProduct(title: string, price: number, status: string, artist: string, formats: string[]) {
  try {
    await prisma.$transaction(async (prisma) => {
      const album = await prisma.album.create({
        data: {
          title,
          price,
          new: status, 
          artist,
          formats: {
            create: formats.map((format) => ({ format })),
          },
        },
      });

      console.log(`Album created with ID: ${album.id}`);
    });
  } catch (error) {
    console.error("Error adding product:", error);
    // Rollback the transaction if an error occurs
  }
}
'use server';
import { prisma } from '../../../lib/prisma';
import {revalidatePath} from "next/cache";

export async function addProduct(title: string, price: number, status: string, artist: string, formats: string[]) {
  try {

      await prisma.$transaction(async (prisma) => {
        const album = await prisma.album.create({
          data: {
            title,
            price,
            new: status === "-" ? "" : status,
            artist,
            formats: {
              connect: formats.map((format) => ({format: format })),
            },
          },
        });
        revalidatePath("/admin")

        console.log(`Album created with ID: ${album.id}`);
      });

  } catch (error) {
    console.error("Error adding product:", error);
  }
}
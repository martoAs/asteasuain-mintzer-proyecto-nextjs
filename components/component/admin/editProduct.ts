'use server';
import { prisma } from '../../../lib/prisma';
import {revalidatePath} from "next/cache";


export async function updateAlbum(id: number, title: string, price: number, status: string, artist: string, formats: string[]) {
    try {

        await prisma.album.update({
            where: { id },
            data: {
                title,
                price,
                new: status === "-" ? "" : status,
                artist,
                formats: {
                    set: formats.map((format) => ({ format })),
                },
            },
        });
        revalidatePath("/admin");
    } catch (error) {
        console.error("Error updating album:", error);
    }
  }
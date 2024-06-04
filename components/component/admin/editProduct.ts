'use server';
import { prisma } from '../../../lib/prisma';
import { UpdateAlbumInput } from '../../../app/lib/definitions';


async function updateAlbum(id: number, data: UpdateAlbumInput) {
    try {
       /* const album = await prisma.album.update({   
            where: { id },

        });*/

    } catch (error) {
      // Handle Prisma errors
        console.error("Error updating album:", error);
    }
  }
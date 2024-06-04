'use server';
import {prisma} from '../../../lib/prisma';

export async function deleteAlbum(id: number) {
   try{
    return await prisma.album.delete({
        where: { id },
        include: { formats: true },
      });
   }catch(error){
         console.error("Error deleting album:", error);
   }
  }
'use server';
import {prisma} from '../../../lib/prisma';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function deleteAlbum(id: number) {
   try{
    await prisma.album.delete({
        where: { id }
      });
    revalidatePath("/admin");

   }catch(error){
         console.error("Error deleting album:", error);
   }
    redirect("/admin")
  }

'use server';
import {prisma} from '@/lib/prisma';
export async function fetchAll() {

    try{
        const products = await prisma.album.findMany({
            include: { formats: true },
        });
        return products;
    }catch(error){
        console.error("Error fetching products:", error);
        return [];
    }

}
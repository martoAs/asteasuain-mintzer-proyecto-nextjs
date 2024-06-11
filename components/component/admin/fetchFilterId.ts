'use server';
import {prisma} from '../../../lib/prisma';

export async function fetchProductsFilteredForId(id: number) {

    try{
        return await prisma.album.findMany({
            where: {
                id: {
                    equals: id
                }
            },
            include: {formats: true},
        })
    }catch(error){
        console.error("Error fetching products:", error);
        return [];
    }

}
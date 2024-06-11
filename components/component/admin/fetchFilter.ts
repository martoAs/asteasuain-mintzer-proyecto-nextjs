'use server';
import {prisma} from '../../../lib/prisma';

export async function fetchProductsFiltered(query: string) {

    try{
        const lowercaseQuery = query.toLowerCase();
        console.log(lowercaseQuery)
        return await prisma.album.findMany({
            where: {
                OR: [
                    {
                        artist: {
                            contains: lowercaseQuery,
                            mode: 'insensitive'
                        }
                    },
                    {
                        title: {
                            contains: lowercaseQuery,
                            mode: 'insensitive'
                        }
                    },
                ]
            },
            include: {formats: true},
        })
    }catch(error){
        console.error("Error fetching products:", error);
        return [];
    }

}
'use server';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function fetchProducts(pages: number) {
    const NUMBER_OF_PRODUCTS = 12;
    try {
        return await prisma.album.findMany({
            skip: (pages - 1) * NUMBER_OF_PRODUCTS,
            take: NUMBER_OF_PRODUCTS,
            include: { formats: true },
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function countProducts() {
    try {
        const count = await prisma.album.count();
        return count;
    } catch (error) {
        console.error("Error contando productos:", error);
        return 0;
    }
}
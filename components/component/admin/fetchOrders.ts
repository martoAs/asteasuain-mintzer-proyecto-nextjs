'use server';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function fetchOrders(pages: number) {
    const NUMBER_OF_ORDERS = 12;
    try {
        return await prisma.finalizedOrder.findMany({
            skip: (pages - 1) * NUMBER_OF_ORDERS,
            take: NUMBER_OF_ORDERS
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
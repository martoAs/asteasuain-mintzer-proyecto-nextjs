'use server';
import { prisma } from '../../../lib/prisma';
import {revalidatePath} from "next/cache";

export async function addOrder(id: number, message: string, amount: number) {
    try {

        await prisma.$transaction(async (prisma) => {
            const order = await prisma.finalizedOrder.create({
                data: {
                    id: id,
                    message: message,
                    amount: amount,
                },
            });
            revalidatePath("/admin")

            console.log(`Order created with ID: ${order.id}`);
        });

    } catch (error) {
        console.error("Error adding order:", error);
    }
}
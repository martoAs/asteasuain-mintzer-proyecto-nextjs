'use server';
import {get, set} from "@/components/component/cart/sessionStore";
import {Item} from "@/app/data/data";
import {revalidatePath} from "next/cache";

const key = "cart";
export async function getCart():Promise<Item[]>{
    let cart = await get(key);
    if(!cart){
        return [];
    }
    else {
          return cart;
    }
}


export async function addToCart(productId: number, name: string, quantity: number, price: number, format: string){
    let cart = await getCart();
    let productData = {id: productId, name, quantity, price, format};
    cart.push(productData);
    await set(key, cart);
    revalidatePath("/cart");
}

export async function removeFromCart(productId: number){
    let cart = await getCart();
    let newCart = cart.filter((item)=>item.id !== productId);
    await set(key, newCart);
    revalidatePath("/cart");
}
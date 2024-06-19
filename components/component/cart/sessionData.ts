'use server';
import {get, set} from "@/components/component/cart/sessionStore";
import {Item, ItemBD} from "@/app/data/data";
import {revalidatePath} from "next/cache";
import {fetchProductsFilteredForId} from "@/components/component/admin/fetchFilterId";

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

export async function obtainFromBD(cart: Item[]) {
    let products : ItemBD[] = [];
    for (const item of cart) {
        let product = await fetchProductsFilteredForId(item.id);
        if (product && product.length > 0) {
            for(const format of product[0].formats){
                if(format.format === item.format){
                    products.push({id: item.id, name: product[0].title, price: product[0].price, quantity: item.quantity, format: item.format})
                    break;
                }
            }
        }

    }
    return products;
}


export async function addToCart(productId: number, quantity: number, format: string){
    let cart = await getCart();
    let productData = {id: productId, quantity: quantity, format: format};
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

export async function existsProduct(productId: number): Promise<boolean> {
    let cart = await getCart();
    return cart.some((item) => item.id === productId);
}

export async function getTotalFromCart(): Promise<number> {
    let cart = await getCart();
    let cartItems = await obtainFromBD(cart);
    let total = 0;
    for (const item of cartItems) {
        total += item.quantity*item.price;
    }
    return total;
}


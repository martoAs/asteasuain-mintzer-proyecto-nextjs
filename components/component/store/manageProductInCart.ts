import{addToCart, removeFromCart} from "@/components/component/cart/sessionData";

export async function addProductToCart(id: number, name: string, price: number, quantity: number, format: string){
    await addToCart(id, name, quantity, price, format);
}
export async function removeProductFromCart(id: number){
    await removeFromCart(id);
}
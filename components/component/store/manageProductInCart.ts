import{addToCart, removeFromCart} from "@/components/component/cart/sessionData";

export async function addProductToCart(id: number, quantity: number, format: string){
    await addToCart(id,quantity,format);
}
export async function removeProductFromCart(id: number){
    await removeFromCart(id);
}
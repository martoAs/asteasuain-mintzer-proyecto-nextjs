import {getTotalFromCart} from "@/components/component/cart/sessionData";


export async function CheckoutPage() {
    const getTotal = await getTotalFromCart()

    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
}
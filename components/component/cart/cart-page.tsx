"use client";
import {JSX, SVGProps, useEffect} from "react"
import {Button} from "@/components/ui/button"
import {getCart, getTotalFromCart, obtainFromBD} from "@/components/component/cart/sessionData";
import {initMercadoPago, Wallet} from '@mercadopago/sdk-react';
import {createPreference} from "@/components/component/cart/createPreference";
import {removeProductFromCart} from "@/components/component/store/manageProductInCart";
import {useState} from "react";
import {ItemBD} from "@/app/data/data";



export default function CartPage() {
    const [cartItems, setCartItems] = useState<ItemBD[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const cart = await getCart();
            const items = await obtainFromBD(cart);
            setCartItems(items);
        };

        fetchData();
    }, []);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchTotal = async () => {
            const totalFromCart = await getTotalFromCart();
            setTotal(totalFromCart);
        };

        fetchTotal();
    }, []);

    const[preferenceID, setPreferenceID] = useState(null);
    const handlePreference = async () => {
        const preference = await createPreference();
        if(preference) setPreferenceID(preference);

    }
    const mpPublicKey = process.env.MP_PUBLIC_KEY;

    if(mpPublicKey) {

        initMercadoPago(mpPublicKey,{
            locale: 'es-AR',
        });
    }
    return (
        <div
            className="w-full h-full bg-[#191D23] text-gray-100 flex flex-col items-center justify-center min-h-screen overflow-hidden relative p-4 md:p-8">
            <div className="absolute py-12 px-4 md:px-6 w-full h-full">
                <h1 className="text-xl sm:text-2xl font-bold mb-8">Shopping Cart</h1>
                <div className="grid md:grid-cols-[1fr_300px] gap-8">
                    <div className="grid gap-6 w-full">
                        {cartItems.map((item) => (
                            <div key={item.id} className="grid grid-cols-[1fr_2fr_auto] items-center gap-4">
                                <div className="grid gap-1">
                                    <h3 className="text-md sm:text-base font-semibold">{item.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm sm:text-base"> Cantidad {item.quantity}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm sm:text-base"> Formato {item.format}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="text-sm sm:text-base font-semibold">Precio: ${(item.quantity * item.price).toFixed(2)}</span>
                                    <form>
                                        <Button variant="ghost" size="icon" className="p-1" formAction={async () => {
                                            await removeProductFromCart(item.id)
                                        }}>
                                            <XIcon className="h-4 w-4"/>
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 grid gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-black">Total</span>
                            <span className="text-lg font-semibold text-black">${total.toFixed(2)}</span>
                        </div>
                        <Button className="w-full" onClick={handlePreference}>Proceed to Checkout</Button>
                        {preferenceID && <Wallet initialization={{preferenceId: preferenceID}} customization={{texts: {valueProp: 'smart_option'}}}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}





function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}
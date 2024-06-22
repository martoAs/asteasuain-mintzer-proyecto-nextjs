//"use client";

import {useState} from "react";
import {createPreference} from "@/components/component/cart/createPreference";
import {initMercadoPago, Wallet} from "@mercadopago/sdk-react";
import {Button} from "@/components/ui/button";



export default function MpComponent({total} : {total: number}) {
   // const[preferenceID, setPreferenceID] = useState("");
    const handlePreference = async () => {
        "use server";
        await createPreference();

    }
    const mpPublicKey = process.env.NEXT_PUBLIC_MP;

    if(mpPublicKey) {

        initMercadoPago(mpPublicKey,{
            locale: 'es-AR',
        });
    }
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 grid gap-4">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-black">Total</span>
                <span className="text-lg font-semibold text-black">${total.toFixed(2)}</span>
            </div>
            <form>
                <Button className="w-full" formAction={handlePreference}>Proceed to Checkout</Button>

            </form>

        </div>
    );
}

/*
*  {preferenceID!="" && <Wallet initialization={{preferenceId: preferenceID}}
                                         customization={{texts: {valueProp: 'smart_option'}}}/>}*/
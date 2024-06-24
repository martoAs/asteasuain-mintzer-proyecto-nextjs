import {createPreference} from "@/components/component/cart/createPreference";
import {initMercadoPago, Wallet} from "@mercadopago/sdk-react";
import {Button} from "@/components/ui/button";



export default function MpComponent({total} : {total: number}) {

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
        <div className="container h-[150px] bg-gray-100 dark:bg-gray-800 rounded-lg p-10">
            <div className="flex justify-between items-center p-1">
                <span className="text-lg font-semibold text-black">Total</span>
                <span className="text-lg font-semibold text-black">${total.toFixed(2)}</span>
            </div>
            <div className="p-5">
                <form>
                    <Button className="my-auto w-full" formAction={handlePreference}>Proceed to Checkout</Button>
                </form>
            </div>


        </div>
    );
}

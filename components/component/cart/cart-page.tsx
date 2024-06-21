import {JSX, SVGProps} from "react"
import {Button} from "@/components/ui/button"
import {getCart, getTotalFromCart, obtainFromBD, removeFromCart} from "@/components/component/cart/sessionData";
import MpComponent from "@/components/component/cart/mpComponent";



export default async function CartPage() {
    const cart = await getCart();
    const cartItems = await obtainFromBD(cart);
    const getTotal = await getTotalFromCart()

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
                                        className="text-sm sm:text-base font-semibold">Precio: ${(item.quantity*item.price).toFixed(2)}</span>
                                    <form>
                                        <Button variant="ghost" size="icon" className="p-1" formAction={async () => {
                                            "use server";
                                            await removeFromCart(item.id)
                                        }}>
                                            <XIcon className="h-4 w-4"/>
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MpComponent total={getTotal}/>
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
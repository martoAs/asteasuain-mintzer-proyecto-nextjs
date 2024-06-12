import { JSX, SVGProps} from "react"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import {getCart, removeFromCart} from "@/components/component/cart/sessionData";
import {Item} from "@/app/data/data";

export default async function CartPage() {
  const cartItems = await getCart();
  const getTotal = () => {
        let total = 0;
      for(const item of cartItems){
          total += item.price * item.quantity;
      }
      return total;
  }


  return (
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div className="grid gap-6 w-full">
            {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[500px_1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Nombre del album: {item.name}</h3>
                        <div className="flex items-center gap-2">
                            <span> Cantidad {item.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span> Formato {item.format}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Precio: ${item.price.toFixed(2)}</span>
                      <form>
                          <Button variant="ghost" size="icon" className="p-1" formAction={async () => {"use server";await removeFromCart(item.id)}}>
                              <XIcon className="h-4 w-4"/>
                          </Button>
                      </form>

                  </div>
                </div>
            ))}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 grid gap-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${getTotal().toFixed(2)}</span>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
  )
}
"use client"

import { JSX, SVGProps, useState} from "react"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"

export default function Component() {
  const cartItems = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "Cozy Blanket",
      quantity: 2,
      price: 29.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Autumn Mug",
      quantity: 1,
      price: 12.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Fall Fragrance Candle",
      quantity: 3,
      price: 16.99,
    },
  ]
  const [cart, setCart] = useState(cartItems)
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const taxes = subtotal * 0.08
  const total = subtotal + taxes
  return (
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div className="grid gap-6">
            {cart.map((item) => (
                <div key={item.id} className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
                  <img
                      src="/placeholder.svg"
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="p-1">
                        <MinusIcon className="h-4 w-4"/>
                      </Button>
                      <span>{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="p-1">
                        <PlusIcon className="h-4 w-4"/>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">${item.price.toFixed(2)}</span>
                    <Button variant="ghost" size="icon" className="p-1" onClick={() => removeFromCart(item.id)}>
                      <XIcon className="h-4 w-4"/>
                    </Button>
                  </div>
                </div>
            ))}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 grid gap-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span className="font-semibold">${taxes.toFixed(2)}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
  )
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M5 12h14" />
      </svg>
  )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
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
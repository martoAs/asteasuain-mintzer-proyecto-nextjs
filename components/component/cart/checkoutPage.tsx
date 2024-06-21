import { initMercadoPago } from '@mercadopago/sdk-react';


export async function Checkout() {
    const key  =  process.env.NEXT_PUBLIC_MP ;
    if(key){
        const mercadoPago = initMercadoPago(key);
    }




}


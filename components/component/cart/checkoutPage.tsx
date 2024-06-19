import { initMercadoPago } from '@mercadopago/sdk-react';


export async function Checkout() {
    const key  =  process.env.MP_PUBLIC_KEY ;
    if(key){
        const mercadoPago = initMercadoPago(key);
    }




}


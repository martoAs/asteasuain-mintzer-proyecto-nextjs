"use server";

import {getCart, obtainFromBD} from "@/components/component/cart/sessionData";
import {Items} from "mercadopago/dist/clients/commonTypes";
import {MercadoPagoConfig, Preference} from "mercadopago";
import {redirect} from "next/navigation";

export async function createPreference () {
        const cartItems = await obtainFromBD(await getCart());
        const items: Items[] = cartItems.map(item => ({
            id: item.id.toString(),
            title: item.name,
            quantity: item.quantity,
            unit_price: item.price,
        }));
        console.log(items);

            const token = process.env.MP_ACCESS_TOKEN;
            if(token) {
                const mp = new MercadoPagoConfig({
                    accessToken: token,
                });

                const body = {
                    body:{
                        items : items,
                    },
                    back_urls: {
                        success: "https://wallofsound.vercel.app/",
                        failure: "https://wallofsound.vercel.app/",
                        pending: "https://wallofsound.vercel.app/"
                    },
                };

                const preference = new Preference(mp);
                const result = await preference.create(body);
                redirect(result.init_point!);
            }

}
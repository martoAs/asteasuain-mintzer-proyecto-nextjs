"use server";
import axios from "axios";

import {getCart, obtainFromBD} from "@/components/component/cart/sessionData";
import {Items} from "mercadopago/dist/clients/commonTypes";
import {MercadoPagoConfig, Preference} from "mercadopago";

export async function createPreference () {
    try{
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
                        back_urls: {
                            success : 'https://www.youtube.com/watch?v=s0E5Slqdo1M',
                            failure : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                            pending : 'https://www.youtube.com/watch?v=Vy8moBcKVIM'
                        },
                        auto_return: 'approved',
                    },

                };

                const preference = new Preference(mp)
                const result = await preference.create(body);
                return result.id;
            }

    }
    catch (error) {
        console.error('Error creating preference:', error);
    }
}
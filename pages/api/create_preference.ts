"use server";
import {MercadoPagoConfig, Preference} from 'mercadopago';
import {getCart, getTotalFromCart, obtainFromBD} from "@/components/component/cart/sessionData";
import {Items} from "mercadopago/dist/clients/commonTypes";
import {ItemBD} from "@/app/data/data";

export default async function handler(req: { method: string; body: { items: Array<Items>; }; }, res: { json: (arg0: { id: string | undefined; }) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: { error: string; }): void; new(): any; }; }; }){
    if(req.method == 'POST'){
        try{
            const token = process.env.MP_ACCESS_TOKEN;
            if(token) {
                const mp = new MercadoPagoConfig({
                    accessToken: token,
                });

                const body = {
                    body:{
                        items : req.body.items,
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
                console.log("RESULTADO",result);
                res.json({
                    id: result.id
                });
            }

        }catch (error) {
            console.error('Error creating preference:', error);
            res.status(500).send({error: 'Error creating preference'});
        }

    }else{
        res.status(405).send({error: 'Method not allowed'})
    }

}

/*async function validateCart(items: Items[]) {
    const itemsBD = await obtainFromBD(await getCart());
    if(await validatePrice(items, itemsBD) && validateItems(items, itemsBD)){
        return items;
    }
    else{
        throw new Error('Items does not match');
    }

}

function validateItems(items: Items[], itemsBD: ItemBD[]){
    return items.every(item => itemsBD.some(itemBD => itemBD.id === parseInt(item.id)));
}
async function validatePrice(items: Items[], itemsBD: ItemBD[]) {
    const total = items.reduce((acc, item) => acc + item.unit_price * item.quantity, 0);
    const totalBD = await getTotalFromCart();
    return total === totalBD;
}*/
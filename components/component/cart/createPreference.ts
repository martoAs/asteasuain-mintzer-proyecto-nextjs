import axios from "axios";
import {getCart, obtainFromBD} from "@/components/component/cart/sessionData";
import {Items} from "mercadopago/dist/clients/commonTypes";

export async function createPreference () {
    try{
        const cartItems = await obtainFromBD(await getCart());
        const items: Items[] = cartItems.map(item => ({
            id: item.id.toString(),
            title: item.name,
            quantity: item.quantity,
            unit_price: item.price*item.quantity,
        }));
        const response = await axios.post('/api/create_preference', {
                items: items
        });
        return response.data.id;
    }
    catch (error) {
        console.error('Error creating preference:', error);
    }
}
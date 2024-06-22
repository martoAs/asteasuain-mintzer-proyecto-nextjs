import {NextRequest} from "next/server";
import {MercadoPagoConfig, Payment} from "mercadopago";
import {addOrder} from "@/components/component/admin/addOrder";
import {removeAllCart} from "@/components/component/cart/sessionData";


const mp = new MercadoPagoConfig({
        accessToken: process.env.MP_ACCESS_TOKEN!,
    });

export async function POST(req: NextRequest){
    const body = await req.json().then((data) => data as {data: {id: string}});
    console.log("REQ", req);
    const payment = await new Payment(mp).get({id: body.data.id});
    const ola = payment.external_reference || "undefined";
    console.log("OLA", ola);
    const order = {
        id: payment.id,
        message: payment.description,
        amount: payment.transaction_amount,
    };
    if(order.id && order.message && order.amount){
        await addOrder(order.id, order.message, order.amount);
        await removeAllCart();
    }


    return Response.json({success: true});
}
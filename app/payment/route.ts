import {NextRequest} from "next/server";
import {MercadoPagoConfig, Payment} from "mercadopago";


const mp = new MercadoPagoConfig({
        accessToken: process.env.MP_ACCESS_TOKEN!,
    });

export async function POST(req: NextRequest){
    console.log("req", req);
    const body = await req.json();
    console.log("BODY",body);
    const payment = new Payment(mp)
    console.log("payment", payment);
    return Response.json({success: true});
}
import {NextRequest} from "next/server";
import {MercadoPagoConfig, Payment} from "mercadopago";


const mp = new MercadoPagoConfig({
        accessToken: process.env.MP_ACCESS_TOKEN!,
    });

export async function POST(req: NextRequest){
    console.log("req", req);
    const body = await req.json().then(data => data as {data: {id: string}});
    const payment = await new Payment(mp).get({id: body.data.id});
    console.log("payment", payment);
    return Response.json({success: true});
}
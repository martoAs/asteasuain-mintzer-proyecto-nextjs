import {NextRequest} from "next/server";
import {MercadoPagoConfig, Payment} from "mercadopago";


const mp = new MercadoPagoConfig({
        accessToken: process.env.MP_ACCESS_TOKEN!,
    });

export async function POST(req: NextRequest){
    const body = await req.json().then((data) => data as {data: {id: string}});
    const payment = await new Payment(mp).get({id: body.data.id});
    console.log("AL MENOS ENTRE");
    console.log("PAYMENT", payment);
    return Response.json({success: true});
}
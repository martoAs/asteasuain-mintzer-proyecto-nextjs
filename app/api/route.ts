import {fetchAll} from "@/components/component/admin/fetchAll";
import {NextRequest, NextResponse} from "next/server";
import {fetchProductsFilteredForId} from "@/components/component/admin/fetchFilterId";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const res = await fetchProductsFilteredForId(Number(id));
            if (!res) {
                return new NextResponse('Producto no encontrado', { status: 404 });
            }

            const item = res[0]

            const data = {
                id: item.id,
                title: item.title,
                price: item.price,
                new: item.new,
                artist: item.artist,
                formats: item.formats.map(format => ({
                    key: format.key,
                    format: format.format
                }))
            };

            return new NextResponse(JSON.stringify({ data }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            return new NextResponse('Error al obtener el producto', { status: 500 });
        }
    } else {
        try {
            const res = await fetchAll();

            const data = res.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                new: item.new,
                artist: item.artist,
                formats: item.formats.map(format => ({
                    key: format.key,
                    format: format.format
                }))
            }));

            return new NextResponse(JSON.stringify({ data }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            return new NextResponse('Error al obtener los productos', { status: 500 });
        }
    }
}
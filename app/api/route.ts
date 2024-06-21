import {fetchAll} from "@/components/component/admin/fetchAll";

export async function GET() {
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

    return new Response(JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
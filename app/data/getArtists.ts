import {fetchProducts} from "@/components/component/admin/fetch";

export async function getArtists(query?: string){
    const artists  = await fetchProducts()

    // If query is provided, filter the array based on the query
    if (query && query.length > 0) {
        return artists.filter(item => {
            // Convert both artist and [album] to lowercase for case-insensitive comparison
            const artistMatches = item.artist.toLowerCase().includes(query.toLowerCase());
            const idMatches = item.id.toString().includes(query);
            const albumMatches = item.title.toLowerCase().includes(query.toLowerCase());
            return artistMatches || albumMatches || idMatches;
        });
    }
    return artists;
}
import {fetchProducts} from "@/components/component/admin/fetch";
import {fetchProductsFiltered} from "@/components/component/admin/fetchFilter";

export async function getArtists(query?: string){


    // If query is provided, filter the array based on the query
    if (query && query.length > 0) {
        return await fetchProductsFiltered(query)
    }
    else{
        return await fetchProducts();
    }

}
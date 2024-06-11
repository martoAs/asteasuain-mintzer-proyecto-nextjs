import * as React from "react";
import {getArtistData} from "@/app/external/lastFm";
import AlbumPageComponent from "@/components/component/store/AlbumPageComponent";
import {fetchProductsFilteredForId} from "@/components/component/admin/fetchFilterId";

export default async function AlbumPage({params: {id}}: { params: { id: string } }) {
    const artists = await fetchProductsFilteredForId(Number(id));
    const results = await getArtistData(artists);
    console.log(results)
    const data = results[0]


    return (
        <AlbumPageComponent data={data}/>
    );
}


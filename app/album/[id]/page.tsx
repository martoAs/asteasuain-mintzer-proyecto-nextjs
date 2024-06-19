import * as React from "react";
import {getArtistData} from "@/app/external/lastFm";
import AlbumPageComponent from "@/components/component/store/AlbumPageComponent";
import {fetchProductsFilteredForId} from "@/components/component/admin/fetchFilterId";
import NotFoundPage from "@/app/not-found";

export default async function AlbumPage({params: {id}}: { params: { id: string } }) {

    const [artists] = await Promise.all([
        fetchProductsFilteredForId(Number(id))
    ]);

    if (!artists) {
        NotFoundPage();
    }

    const results = await getArtistData(artists);
    const data = results[0]


    return (
        <AlbumPageComponent data={data}/>
    );
}


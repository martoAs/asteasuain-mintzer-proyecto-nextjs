import * as React from "react";
import {getArtists} from "@/app/data/getArtists";
import {getArtistData} from "@/app/external/lastFm";
import AlbumPageComponent from "@/components/component/store/AlbumPageComponent";

export default async function AlbumPage({params: {id}}: { params: { id: string } }) {
    const artists = await getArtists(id);
    const results = await getArtistData(artists);

    const data = results[0]


    return (
        <AlbumPageComponent data={data}/>
    );
}


import {Principal} from '@/components/component/store/Principal';
import {getArtistData} from "@/app/external/lastFm";
import {getArtists} from "@/app/data/getArtists";

export default async function Page({
                                 searchParams,
                             }: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    //const currentPage = Number(searchParams?.page) || 1;

    //console.log(getArtists(query))

    let artists = getArtists(query);
    let results = await getArtistData(artists);
    console.log(results)

    return (
        <>
            <Principal data={results}/>

        </>
    )
}
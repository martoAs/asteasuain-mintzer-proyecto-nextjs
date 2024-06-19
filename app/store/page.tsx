import { Principal } from '@/components/component/store/Principal';
import { getArtistData } from "@/app/external/lastFm";
import { getArtists } from "@/app/data/getArtists";
import {notFound} from "next/navigation";
import {countProducts} from "@/components/component/admin/fetch";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | undefined }
}) {
    const query = searchParams?.query || '';
    const page = Number(searchParams?.page) || 1;
    const CANT_PAGINAS = 12;

    let artists = await getArtists(page, query);
    let results = await getArtistData(artists);

    if (results.length == 0) {
        notFound()
    }

    let count = await countProducts()

    const cantPages = Math.ceil(count / CANT_PAGINAS);
    return (
        <>
            <Principal data={results} count={cantPages}/>

        </>
    );
}
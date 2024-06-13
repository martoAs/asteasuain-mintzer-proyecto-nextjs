import { Principal } from '@/components/component/store/Principal';
import { getArtistData } from "@/app/external/lastFm";
import { getArtists } from "@/app/data/getArtists";
import {notFound} from "next/navigation";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | undefined }
}) {
    const query = searchParams?.query || '';
    const page = Number(searchParams?.page) || 1;
    const per_page = Number(searchParams?.per_page) || 12;


    let artists = await getArtists(page, query);
    let results = await getArtistData(artists);

    if (results.length == 0) {
        notFound()
    }

    return (
        <>
            <Principal data={results} />

        </>
    );
}
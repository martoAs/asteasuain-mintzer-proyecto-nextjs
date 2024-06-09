import { Principal } from '@/components/component/store/Principal';
import { getArtistData } from "@/app/external/lastFm";
import { getArtists } from "@/app/data/getArtists";
import PaginationControls from "@/components/component/store/PaginationControls";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const query = searchParams?.query || '';
    const page = Number(searchParams?.page) || 1;
    const per_page = Number(searchParams?.per_page) || 12;

    const start = (page - 1) * per_page;
    const end = start + per_page;

    let artists = await getArtists(query);
    let results = await getArtistData(artists);

    const entries = results.slice(start, end);

    return (
        <>
            <Principal start={start} end={end} length={results.length} data={entries} />

        </>
    );
}
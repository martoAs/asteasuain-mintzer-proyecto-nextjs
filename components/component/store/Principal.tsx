'use client';
import GridOfCards from "@/components/component/store/GridOfCards";
import SearchInput from "@/components/component/store/SearchInput";
import PaginationControls from "@/components/component/PaginationControls";
import {AlbumComplete} from "@/app/data/data";

type PrincipalProps = {
    data: AlbumComplete[];
    count: number;
};

export function Principal({ data, count }: PrincipalProps) {
    return (
        <div
            className="py-12 md:py-24 lg:py-32 bg-[#191D23] text-gray-100 flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <section className="w-1/2 flex justify-center">
                <SearchInput/>
            </section>
            <section>
                <GridOfCards data={data}/>
            </section>
            <section>
                <PaginationControls cantPages={count}
                />
            </section>
        </div>
    );
}
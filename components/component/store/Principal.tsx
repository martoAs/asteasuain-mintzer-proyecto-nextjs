'use client';
import GridOfCards from "@/components/component/store/GridOfCards";
import SearchInput from "@/components/component/store/SearchInput";
import PaginationControls from "@/components/component/store/PaginationControls";

interface PrincipalProps {
    start: number;
    end: number;
    length: number;
    data: ProductAPI[];
}

export function Principal({ start, end, length, data }: PrincipalProps) {
    return (
        <div className="py-12 md:py-24 lg:py-32 bg-[#191D23] text-gray-100 flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <section className="w-1/2 flex justify-center">
                <SearchInput />
            </section>
            <section>
                <GridOfCards data={data} />
            </section>
            <section>
                <PaginationControls
                    hasNextPage={end < length}
                    hasPrevPage={start > 0}
                />
            </section>
        </div>
    );
}
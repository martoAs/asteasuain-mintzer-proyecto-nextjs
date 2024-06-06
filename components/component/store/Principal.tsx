'use client';
import GridOfCards from "@/components/component/store/GridOfCards";
import SearchInput from "@/components/component/store/SearchInput";

export function Principal({ data }:{data: ProductAPI[]}) {


    return (
        <div className=" py-12 md:py-24 lg:py-32 xl:py-48 bg-[#191D23] text-gray-100  flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <section className="w-1/2 flex justify-center">
                <SearchInput/>
            </section>
            <section>
                <GridOfCards data={data}/>
            </section>
        </div>
    )
}
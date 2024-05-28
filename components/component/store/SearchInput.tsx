"use client";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SearchInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);



        console.log(term);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <input
            className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:[#76ABAE] placeholder:text-zinc-400"
            placeholder="Busque el nombre por artista"
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get('query')?.toString()}
        />
    );
};
export default SearchInput;
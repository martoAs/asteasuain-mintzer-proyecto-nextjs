"use client";

const SearchInput = () => {
    return (
        <input
            className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:[#76ABAE] placeholder:text-zinc-400"
            placeholder="Busque el nombre por artista"
        />
    );
};
export default SearchInput;
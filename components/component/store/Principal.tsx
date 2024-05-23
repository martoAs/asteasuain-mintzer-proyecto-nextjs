'use client';
import GridOfCards from "@/components/component/store/GridOfCards";
import SearchInput from "@/components/component/store/SearchInput";
import { useEffect, useState } from 'react';

export function Principal() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await res.json();
                setData(result);
            } catch (error) {
                // @ts-ignore
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) { // @ts-ignore
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className=" py-12 md:py-24 lg:py-32 xl:py-48 bg-[#191D23] text-gray-100  justify-center min-h-screen">
            <section className="w-1/2 flex justify-center">
                <SearchInput/>
            </section>
            <section>
                <GridOfCards data={data}/>
            </section>
        </div>
    )
}
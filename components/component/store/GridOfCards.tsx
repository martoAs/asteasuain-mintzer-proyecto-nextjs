import { StoreCards } from './StoreCards';

export default function GridOfCards({ data }:{data: Data[]}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 ">
            {Array.from({ length: Math.ceil(data.length / 6) }, (_, i) => (
                <div key={i} className="flex flex-wrap justify-center gap-4 mb-10"> {/* Added mb-10 for row separation */}
                    {Array.from({ length: 6 }, (_, j) => (
                        <div key={j} className="flex-shrink-0 w-48 h-64 mb-20">
                            <StoreCards item={data[i * 6 + j]} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

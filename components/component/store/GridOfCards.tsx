import {StoreCard} from './StoreCard';
import {AlbumComplete} from "@/app/data/data";

export default function GridOfCards({data}: { data: AlbumComplete[] }) {
    return (
        <div className="grid gap-5 p-20 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6">
            {data.map(item => (
                <div key={item.title} className="flex-shrink-0 p-2 w-48 h-64 mb-20">
                    <StoreCard item={item}/>
                </div>
            ))}
        </div>
    )
        ;
}

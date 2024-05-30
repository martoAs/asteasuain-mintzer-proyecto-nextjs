import {StoreCards} from './StoreCards';

export default function GridOfCards({data}: { data: Data[] }) {
    return (
        <div className="grid gap-5 p-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {data.map(item => (
                <div key={item.albumName} className="flex-shrink-0 w-48 h-64 mb-20">
                    <StoreCards item={item}/>
                </div>
            ))}
        </div>
    )
        ;
}

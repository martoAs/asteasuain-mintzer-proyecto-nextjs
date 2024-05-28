import {StoreCards} from './StoreCards';

export default function GridOfCards({data}: { data: Data[] }) {
    return (
        <div className="grid grid-cols-6 gap-6 p-20 ">
            { data.map(item =>
                <div key={item.albumName} className="flex-shrink-0 w-48 h-64 mb-20">
                    <StoreCards item={item}/>
                </div>)
            }
        </div>
    )
        ;
}

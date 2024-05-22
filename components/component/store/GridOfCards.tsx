
import { StoreCards } from './StoreCards';

export default function GridOfCards() {
    return (
        <>
            <div className="grid grid-cols-1  gap-10 p-20">
                {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="flex flex-wrap gap-x-4">
                        {Array.from({ length: 6 }, (_, j) => (
                            <div key={j}>
                                <StoreCards />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
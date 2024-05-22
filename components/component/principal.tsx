import {CardsTopSelling} from "./cards"
import {Introduction} from "./intro"


export function Principal() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#191D23] text-gray-100">
                <Introduction/>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#191D23] text-gray-100">
                <div className="container px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Top ventas </h2>
                        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                           Descubre las últimas novedades y los clásicos atemporales que nuestros clientes no pueden dejar de comprar.
                        </p>
                    </div>
                    <CardsTopSelling/>
                </div>
            </section>
            
        </>
    )
}


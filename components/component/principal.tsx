import {Opinions} from "./opinions"
import {CardsTopSelling} from "./cards"
import {Introduction} from "./intro"


export function Principal() {
    return (
        <>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#3b2314] text-gray-100">
                <Introduction/>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#3b2314] text-gray-100">
                <div className="container px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Top Selling
                            Products</h2>
                        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Discover the latest must-have music gear and accessories.
                        </p>
                    </div>
                    <CardsTopSelling/>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2d1c10] text-gray-100">
                <div className="container px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers
                            Say</h2>
                        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Hear from our satisfied customers about their experiences with our products and services.
                        </p>
                    </div>
                    <Opinions/>
                </div>
            </section>
        </>
    )
}


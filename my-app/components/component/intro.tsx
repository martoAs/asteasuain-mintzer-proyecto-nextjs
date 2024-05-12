import Image from 'next/image'
import Link from "next/link"
export function Introduction(){

    return(

        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-100">
                  Discover Your Next Musical Obsession
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Explore our curated collection of the latest albums, instruments, and accessories to elevate your
                  musical journey.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#a07d5e] px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-[#b28f70] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
                href="#"
              >
                Shop Now
              </Link>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
    )


}
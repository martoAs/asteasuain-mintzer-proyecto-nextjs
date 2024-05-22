import Link from "next/link"
export function Introduction(){

    return(

        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-100">
                  Wall of Sound: Tu Destino para la Música en Formato Clásico
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                Explora nuestra tienda en línea para encontrar una amplia selección de vinilos, CDs, álbumes y cassettes. Desde clásicos atemporales hasta las últimas novedades, tenemos algo para todos los amantes de la música.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#76ABAE] px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-[#97D7DB] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
                href="/store"
              >
                Comprá ahora!
              </Link>
            </div>
          </div>
        </div>
    )


}
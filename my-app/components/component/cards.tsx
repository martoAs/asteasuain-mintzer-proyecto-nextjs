import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import  StarIcon  from "@/components/component/staricon"
import Image from 'next/image'

export function CardsTopSelling() {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <Card className="bg-[#2d1c10] text-gray-100">
          <CardHeader>
            <Image
              alt="Product"
              className="aspect-square object-cover rounded-t-lg"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Fender American Professional II Stratocaster</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-gray-600 stroke-gray-600" />
                <StarIcon className="w-4 h-4 fill-gray-600 stroke-gray-600" />
                <span>(42)</span>
              </div>
              <div className="font-bold text-2xl">$1,499.99</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-[#a07d5e] text-[#3b2314] hover:bg-[#b28f70] dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
              size="sm"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2d1c10] text-gray-100">
          <CardHeader>
            <Image
              alt="Product"
              className="aspect-square object-cover rounded-t-lg"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Yamaha P-125 88-Key Weighted Action Digital Piano</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-gray-600 stroke-gray-600" />
                <span>(58)</span>
              </div>
              <div className="font-bold text-2xl">$599.99</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-[#a07d5e] text-[#3b2314] hover:bg-[#b28f70] dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
              size="sm"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2d1c10] text-gray-100">
          <CardHeader>
            <Image
              alt="Product"
              className="aspect-square object-cover rounded-t-lg"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Shure SM58 Cardioid Dynamic Vocal Microphone</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <span>(72)</span>
              </div>
              <div className="font-bold text-2xl">$99.99</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-[#a07d5e] text-[#3b2314] hover:bg-[#b28f70] dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
              size="sm"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2d1c10] text-gray-100">
          <CardHeader>
            <Image
              alt="Product"
              className="aspect-square object-cover rounded-t-lg"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Focusrite Scarlett 2i2 USB Audio Interface</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-[#a07d5e]" />
                <StarIcon className="w-4 h-4 fill-gray-600 stroke-gray-600" />
                <span>(64)</span>
              </div>
              <div className="font-bold text-2xl">$159.99</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-[#a07d5e] text-[#3b2314] hover:bg-[#b28f70] dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
              size="sm"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>

    )


}
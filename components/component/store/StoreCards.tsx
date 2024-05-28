import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MarqueeOnOverflow from "@/components/component/store/MarqueeOnOverflow";

export function StoreCards({ item }:{item: Data}) {
    const icon = <ShoppingCartIcon />;
    return (
        <Card className="bg-[#31363F] text-gray-100 flex flex-col items-center">
            <CardHeader className="w-full flex-col items-center">
                <div className="w-24 h-24 ">
                    <Image
                        alt="Product"
                        className="aspect-square object-cover rounded-t-lg"
                        height="100"
                        src={item.imageUrl}
                        width="100"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center w-full text-center">
                <MarqueeOnOverflow className="w-full flex flex-col items-center justify-center" direction="horizontal" animation={["animate-marqueeX", "animate-marqueeX2"]}>
                    <span className="text-nowrap ">{item.artist}</span>
                </MarqueeOnOverflow>
                <MarqueeOnOverflow className="w-full flex flex-col items-center justify-center" direction="horizontal" animation={["animate-marqueeX", "animate-marqueeX2"]}>
                     <span className="text-nowrap">{item.albumName}</span>
                </MarqueeOnOverflow>
            </CardContent>
            <CardFooter className="w-full flex justify-center">
                <Button
                    className="w-full bg-[#76ABAE] text-[#FFFFFF] hover:bg-[#222831] dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
                    startIcon={icon}
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}


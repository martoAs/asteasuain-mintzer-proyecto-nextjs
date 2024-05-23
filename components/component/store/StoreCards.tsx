
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function StoreCards({ item }:{item: Data}) {
    //const random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const icon = <ShoppingCartIcon/>;
    return (
        <>
            <Card className="bg-[#31363F] text-gray-100 ">
                <CardHeader>
                    <Image
                        alt="Product"
                        className="aspect-square object-cover rounded-t-lg"
                        height="100"
                        src={item.imageUrl}
                        width="100"
                    />
                </CardHeader>
                <CardContent className="justify-center">
                    <div className="name">
                        {item.artist}
                    </div>
                    <div className="name">
                        {item.albumName}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full bg-[#76ABAE] text-[#FFFFFF] hover:bg-[#222831] dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
                        startIcon={icon}
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
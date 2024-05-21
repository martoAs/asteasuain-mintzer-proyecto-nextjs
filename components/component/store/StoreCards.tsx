import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import StarIcon from "@/components/component/staricon";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function StoreCards() {
    const random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const icon = <ShoppingCartIcon/>;
    return (
        <>
            <Card className="bg-[#2d1c10] text-gray-100">
                <CardHeader>
                    <Image
                        alt="Product"
                        className="aspect-square object-cover rounded-t-lg"
                        height="100"
                        src="/placeholder.svg"
                        width="100"
                    />
                </CardHeader>
                <CardContent>
                    <div>
                        Nombre de Artista
                    </div>
                    <div>
                        Nombre de Album
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full bg-[#a07d5e] text-[#3b2314] hover:bg-[#b28f70] dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
                        startIcon={icon}
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
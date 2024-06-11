import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MarqueeOnOverflow from "@/components/component/store/MarqueeOnOverflow";
import Image from 'next/image';
import {AlbumComplete} from "@/app/data/data";


export function StoreCard({item}: { item: AlbumComplete }) {
    const NULL_STATUS = "-";
    const renderNewChip = (newStatus: string | null): React.ReactNode => {
        if (newStatus != NULL_STATUS) {
            return (
                <Chip
                    component="span"
                    variant="soft"
                    color="success"
                >
                    {newStatus}
                </Chip>
            );
        }
        return null;
    };


    return (
        <Card sx={{ width: 320, maxWidth: '100%', border: 'none'}} className="bg-[#EEEEEE]">
            <CardOverflow>
                <AspectRatio sx={{ minWidth: 100 }}>
                    <Image
                        src={item.imageUrl}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="body-xs">{item.artist}</Typography>

                <Link href={`/album/${item.id}`}
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                    >
                        <MarqueeOnOverflow className="w-full"
                                           direction="horizontal"
                                           animation={["animate-marqueeX", "animate-marqueeX2"]}>
                            <span className="text-nowrap">{item.title}</span>
                        </MarqueeOnOverflow>
                    </Link>


                <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: 'xl' }}
                    endDecorator={
                        renderNewChip(item.new)
                    }
                >
                    ${item.price}
                </Typography>
            </CardContent>
            <CardOverflow>
                <Button variant="solid" className="bg-[#59999C] hover:bg-[#5FC8CD]" size="lg">
                    <Link href="/#" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Add To Cart
                    </Link>
                </Button>

            </CardOverflow>
        </Card>
    );
}

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


export function StoreCards({item}: { item: Data }) {
    return (
        <Card sx={{ width: 320, maxWidth: '100%', border: 'none'}} className="bg-[#EEEEEE]">
            <CardOverflow>
                <AspectRatio sx={{ minWidth: 100 }}>
                    <img
                        src={item.imageUrl}
                        srcSet= {`${item.imageUrl} 2x`}
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
                            <span className="text-nowrap">{item.albumName}</span>
                        </MarqueeOnOverflow>
                    </Link>


                <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: 'xl' }}
                    endDecorator={
                        <Chip component="span" size="sm" variant="soft" color="success">
                            Formato
                        </Chip>
                    }
                >
                    2,900 THB
                </Typography>
            </CardContent>
            <CardOverflow>
                <Button variant="solid" className="bg-[#59999C] hover:bg-[#5FC8CD]" size="lg">
                    Add to cart
                </Button>
            </CardOverflow>
        </Card>
    );
}

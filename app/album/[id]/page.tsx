import {getArtists} from "@/app/data/getArtists";
import {getArtistData} from "@/app/external/lastFm";
import {CardMedia} from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from '@mui/joy/Button';
import {Divider, Stack} from "@mui/joy";
import Box from "@mui/material/Box";
import Chip from '@mui/joy/Chip';

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function AlbumPage({params: {id}}: { params: { id: string } }) {
    const artists = getArtists(id);
    const results = await getArtistData(artists);

    const data = results[0]

    function renderSummaryWithoutLink(summary : string) {
        // Buscar coincidencias de enlaces en el resumen original
        const linkRegex = /<a\s+href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi;
        const match = linkRegex.exec(summary);

        if (match) {
            const linkUrl = match[1];
            const anchorText = match[2];
            const summaryWithoutLink = data.summary.replace(linkRegex, '..');
            return (
                <>
                    <Typography className="text-justify" sx={{display: {xs: "none", sm: "block"}}}>
                        {summaryWithoutLink}
                    </Typography>
                    <Link className="text-blue-600" href={linkUrl}>{anchorText}</Link>
                </>
            );
        } else {
            return data.summary;
        }
    }

    return (
        <div
            className="py-12 md:py-24 bg-[#191D23] text-gray-100  flex flex-col justify-center min-h-screen overflow-hidden">

            <div className="flex flex-row gap-20 p-10 m-10 bg-[#EEEEEE]">
                <div className="w-1/2 relative">
                    <Image src={data.imageUrl} alt={"CAMBIAME"} className="size-full" fill/>
                </div>
                <div className="flex flex-col justify-center w-1/2">
                    <Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">

                            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2}>
                                <Typography level="h3" component="div">
                                    {data.albumName}
                                </Typography>
                                <Typography level="h3" component="div">
                                    $4.50
                                </Typography>
                            </Stack>

                        </Stack>
                        <Typography level="body-xs">{data.artist}</Typography>

                        <Divider>
                            <Chip variant="soft" color="neutral" size="sm">
                                Album Info
                            </Chip>
                        </Divider>

                        {renderSummaryWithoutLink(data.summary)}

                    </Box>

                    <Box >
                        <Typography gutterBottom>
                            Tags
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            >
                            {data.tags.map((tag: string) => (
                                <Chip>{tag}</Chip>
                            ))}
                        </Stack>
                    </Box>

                    <Button variant="solid" className="bg-[#59999C] hover:bg-[#5FC8CD] my-5" size="lg">
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}


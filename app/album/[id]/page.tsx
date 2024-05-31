import {getArtists} from "@/app/data/getArtists";
import {getArtistData} from "@/app/external/lastFm";
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

    const chips = [];
    for (let i = 0; i < data.tags.length; i++) {
        const tag = data.tags[i];
        chips.push(<Chip key={i}>{tag}</Chip>);
    }

    function renderSummaryWithoutLink(summary: string) {
        // Buscar coincidencias de enlaces en el resumen original
        const linkRegex = /<a\s+href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi;
        const match = linkRegex.exec(summary);

        if (match) {
            const linkUrl = match[1];
            const anchorText = match[2];
            const summaryWithoutLink = data.summary.replace(linkRegex, '..');
            return (
                <>
                    <Typography className="text-justify" >
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
            className=" lg:p-36 bg-[#191D23] text-gray-100  flex flex-col justify-center min-h-screen overflow-hidden ">

            <div className="flex gap-20 p-10 m-10 bg-[#EEEEEE] self-center flex-col sm:flex-row ">
                <div className="flex w-full sm:w-1/2 justify-center items-center">
                    <Image
                        src={data.imageUrl}
                        alt="My image"
                        className="w-96"
                        layout="responsive"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex flex-col justify-center w-full sm:w-1/2">
                    <Box>
                        <Stack
                            direction={{xs: 'column', lg: 'row'}}
                            spacing={2}
                            justifyContent="space-between"
                        >
                            <Typography level="h3" component="div">
                                {data.albumName}
                            </Typography>

                            <Typography level="h3" component="div">
                                $4.50
                            </Typography>
                        </Stack>
                        <Typography className="py-5" level="body-xs">{data.artist}</Typography>

                        <Divider>
                            <Chip variant="soft" color="neutral" size="sm">
                                Album Info
                            </Chip>
                        </Divider>

                        {renderSummaryWithoutLink(data.summary)}

                    </Box>

                    <Box>
                        <Typography className="py-5">
                            Tags
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'flex-start', // Alinea los elementos horizontalmente
                            }}
                        >
                            {chips}
                        </Box>
                    </Box>

                    <Button variant="solid" className="bg-[#59999C] hover:bg-[#5FC8CD] my-5" size="lg">
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}


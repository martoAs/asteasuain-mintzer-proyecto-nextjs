import Button from '@mui/joy/Button';
import * as React from "react";
import {Divider, Stack} from "@mui/joy";
import Box from "@mui/material/Box";
import {FaArrowLeft} from "react-icons/fa";
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Link from "next/link";

import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import formatRadioButtons from "@/components/component/store/Formats";
import renderSummaryWithoutLink from "@/components/component/store/RenderSummary";
import tags from "@/components/component/store/Tags";
import Image from "next/image";

export default function AlbumPageComponent({data}: { data: ProductAPI }) {
    return (
        <div
            className=" lg:p-36 bg-[#191D23] text-gray-100  flex flex-col justify-center min-h-screen overflow-hidden ">

            <div className="flex gap-20 p-10 m-10 bg-[#EEEEEE] self-center flex-col sm:flex-row ">
                <Link href="/store" style={{textDecoration: 'none'}}>
                    <Button variant="solid" className="bg-[#000000] hover:bg-[#363636]" size="lg">
                        <FaArrowLeft style={{color: 'white', fontSize: '1.5em'}}/>
                    </Button>
                </Link>
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
                                {data.title}
                            </Typography>

                            <Typography level="h3" component="div">
                                ${data.price}
                            </Typography>
                        </Stack>
                        <Typography className="py-5" level="body-xs">{data.artist}</Typography>

                        <Divider>
                            <Chip variant="soft" color="neutral" size="sm">
                                Album Info
                            </Chip>
                        </Divider>

                        {renderSummaryWithoutLink(data, data.summary)}

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
                            {tags(data)}
                        </Box>
                    </Box>

                    <FormControl className="py-5">
                        <FormLabel id="demo-radio-buttons-group-label">Elija un formato</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={data.formats[0].format}
                            name="radio-buttons-group"
                        >
                            {formatRadioButtons(data.formats)}
                        </RadioGroup>
                    </FormControl>

                    <Button variant="solid" className="bg-[#59999C] hover:bg-[#5FC8CD] my-5" size="lg">
                        <Link href="/#" style={{textDecoration: 'none', color: 'inherit'}}>
                            Add To Cart
                        </Link>
                    </Button>

                </div>
            </div>
        </div>
    );
}
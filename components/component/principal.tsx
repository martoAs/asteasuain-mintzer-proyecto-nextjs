"use client";

import {Carousel, Typography} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";


export default function Principal() {
    return (
        <section className="w-full  bg-[#191D23] text-gray-100 flex flex-col items-center justify-center min-h-screen overflow-hidden relative">
            <Carousel className="rounded-xl absolute">
                <div className="relative h-full w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1649495527004-68247643d82e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="image 1"
                        width={1000}
                        height={1000}
                        priority
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="my-5 w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-100"
                            >
                                Wall of Sound: Your Destination for Classical Music
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="py-2 mb-12 opacity-80"
                            >
                                Explore our online store to find a wide selection of vinyl records, CDs,
                                albums, and cassettes. From timeless classics to the latest releases, we have something for every music lover.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1544462415-5c4e1062755a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="image 2"
                        width={1000}
                        height={1000}
                        priority
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="my-5 w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-100"
                            >
                                Purchase your favorite albums.
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="py-2 mb-12 opacity-80"
                            >
                                Order records from the comfort of your home, just one click away!
                            </Typography>
                            <div className="flex gap-2">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#76ABAE] px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-[#97D7DB] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#3b2314] dark:text-gray-100 dark:hover:bg-[#2d1c10]"
                                    href="/store"
                                >
                                    Buy now!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>

    );
}
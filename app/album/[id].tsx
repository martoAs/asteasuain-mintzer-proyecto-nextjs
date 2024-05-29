import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import {getArtists} from "@/app/data/getArtists";
import {getArtistData} from "@/app/external/lastFm";

export default function AlbumPage() {
    const router = useRouter();
    const albumId = router.query;
    console.log(router.query)
    console.log(albumId)

    return (
        <>
            <h1>hola</h1>
        </>
    );
}


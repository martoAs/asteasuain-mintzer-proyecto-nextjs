import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    return (
        <div className=" py-12 md:py-24 lg:py-32 xl:py-48 bg-[#191D23] text-gray-100  flex flex-col items-center justify-center min-h-screen">
            <Box sx={{display: 'flex'}}>
                <CircularProgress/>
            </Box>
        </div>

    );
}
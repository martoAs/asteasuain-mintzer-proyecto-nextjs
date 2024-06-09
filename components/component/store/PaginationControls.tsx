// PaginationControls.tsx
'use client'

import {FC} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import Button from '@mui/joy/Button';

interface PaginationControlsProps {
    hasNextPage: boolean
    hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
    {
        hasNextPage,
        hasPrevPage,
    }
) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '12'

    return (
        <div className='bg-[#191D23] text-gray-100  flex items-center justify-center overflow-hidden'>
            <Button
                className='bg-[#59999C] hover:bg-[#5FC8CD]'
                size="lg"
                disabled={!hasPrevPage}
                onClick={() => {
                    router.push(`store/?page=${Number(page) - 1}&per_page=${per_page}`)
                }}>
                Prev Page
            </Button>

            <div className="mx-4">
                {page} / {Math.ceil(10 / Number(per_page))+ 1 }
            </div>

            <Button
                variant="solid"
                className="bg-[#59999C] hover:bg-[#5FC8CD]" size="lg"
                disabled={!hasNextPage}
                onClick={() => {
                    router.push(`store/?page=${Number(page) + 1}&per_page=${per_page}`)
                }}>
                Next Page
            </Button>
        </div>
    )
}

export default PaginationControls
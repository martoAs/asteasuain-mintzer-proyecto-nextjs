// PaginationControls.tsx
'use client'

import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import Button from '@mui/joy/Button';


const PaginationControls =  () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const page = searchParams.get('page') ?? '1'
    //const per_page = searchParams.get('per_page') ?? '12'


    return (
        <div className='bg-inherit m-5 text-gray-100  flex items-center justify-center overflow-hidden'>
            <Button
                className='bg-[#59999C] hover:bg-[#5FC8CD]'
                size="lg"
                onClick={() => {
                    const newParams = new URLSearchParams(searchParams)
                    newParams.set('page', String(Number(page) - 1))
                    router.push( `${pathname}/?${newParams.toString()}`)
                }}>
                Prev Page
            </Button>

            <div className="mx-4">
                {page}
            </div>

            <Button
                variant="solid"
                className="bg-[#59999C] hover:bg-[#5FC8CD]" size="lg"
                onClick={() => {
                    const newParams = new URLSearchParams(searchParams)
                    newParams.set('page', String(Number(page) + 1))
                    router.push( `${pathname}/?${newParams.toString()}`)
                }}>
                Next Page
            </Button>
        </div>
    )
}

export default PaginationControls
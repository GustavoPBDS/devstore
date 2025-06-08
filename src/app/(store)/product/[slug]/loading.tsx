import Skeleton from '@/components/skeleton'
import React from 'react'

export default function LoadingProduct() {
    return (
         <div className='grid min-h-[600px] grid-cols-3'>
            <div className='col-span-2'>
                <Skeleton className='min-h-[610px] max-w-[610px]'/>
            </div>

            <div className='flex flex-col justify-center px-12 gap-5'>
                <Skeleton  className='min-h-[30px] max-w-full rounded-lg'/>

                <Skeleton  className='min-h-[200px] max-w-full rounded-lg'/>

                <Skeleton  className='min-h-[70px] max-w-full rounded-lg'/>
            </div>
        </div>
    )
}

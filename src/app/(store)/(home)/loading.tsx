import Skeleton from '@/components/skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className='grid max-h-full grid-cols-9 grid-rows-6 gap-6'>
            <Skeleton className='col-span-6 row-span-6 h-[600px]'/>
            <Skeleton className='col-span-3 row-span-3'/>
            <Skeleton className='col-span-3 row-span-3'/>
        </div>
    )
}

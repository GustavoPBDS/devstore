'use client'
import Skeleton from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function LoadingSearch() {
    const searchParams = useSearchParams(),
        q = searchParams.get('q')

    return (
        <div className='flex flex-col gap-4'>
            <p className='text-sm'>Resultados para <span className='font-semibold'>{q ?? ''}</span></p>

            <div className='grid grid-cols-3 gap-6'>
                <Skeleton className='h-[400px] rounde-lg'/>
                <Skeleton className='h-[400px] rounde-lg'/>
                <Skeleton className='h-[400px] rounde-lg'/>
            </div>
        </div>
    )
}

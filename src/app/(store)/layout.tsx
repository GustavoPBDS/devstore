import HeaderStore from '@/components/header'
import { CartProvider } from '@/contexts/cartContext'
import React, { ReactNode } from 'react'

export default function LayoutStore({children}: {children: ReactNode}) {
    return (
        <CartProvider>
            <div className='mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-5'>
                <HeaderStore/>
                <div>{children}</div>
            </div>
        </CartProvider>
    )
}

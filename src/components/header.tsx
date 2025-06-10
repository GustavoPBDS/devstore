import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import CartWidgetComponent from './cart-widget'

export default function HeaderStore() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Link 
                    href={'/'}
                    className='text-2xl font-extrabold text-white'
                >
                    devstore
                </Link>

                <form className='flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700'>
                    <Search className='w-5 h-5 text-zinc-500'/>

                    <input
                        placeholder='Buscar Produtos'
                        className='flex-1 bg-transparent text-sm outline-none placeholder: text-zinc-500'
                    />
                </form>
            </div>
            <div className='flex items-center gap-4'>
                <CartWidgetComponent/>

                <div className='w-px h-4 bg-zinc-700'/>

                <Link 
                    href={'/'}
                    className='flex items-center gap-2 hover:underline'
                >
                    <span className='text-sm'>Conta</span>
                    <Suspense>
                        <Image
                            src={'https://avatars.githubusercontent.com/u/108243504?v=4'}
                            alt='Perfil da conta'
                            width={24}
                            height={24}
                            className='h-6 w-6 rounded-full'
                        />
                    </Suspense>
                </Link>
            </div>
        </div>
    )
}

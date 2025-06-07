import api from '@/data/api'
import IProduct from '@/data/types/IProduct'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getProductsFeatured() : Promise<IProduct[]> {
    const res = await api('/products/featured', {
        //cache: 'force-cache' essa rota vai ser usada apenas uma vez, se outro usuario fazer essa req, ele vai pegar do cache ao inves de realizar a requisição (é o default)
        // o no-store, é dizendo q todos os usuarios vão fazer essa requisição toda vez q acessar a rota
        /* next:{
            revalidate: 1// quantidade em segundos, dentro desse tempo limite, todos os usuarios vão acessar os dados da requisição via cache do primeiro usuario que acessou, dps vai resetar o cache
        } */
       cache: 'no-store'
    }),
        productsFeatured = await res.json()

    return productsFeatured
    
}

export default async function HomePage() {
    const [mainProduct, ...otherProducts] = await getProductsFeatured()

    return (
        <div className='grid max-h-[600px] grid-cols-9 grid-rows-6 gap-6'>
            <Link
                href={`/product/${mainProduct.slug}`}
                className='group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end'
            >
                <Image
                    src={mainProduct.image}
                    alt={mainProduct.title}
                    width={600}
                    height={600}
                    quality={100}
                    className='group-hover:scale-105 transition-transform duration-500 bg-contain'
                />
                <div className='absolute bottom-20 right-20 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
                    <span className='text-sm truncate'>{mainProduct.title}</span>
                    <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>{mainProduct.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })}</span>
                </div>
            </Link>

            {otherProducts.map(otherProduct=>(
                <Link
                    href={`/product/${otherProduct.slug}`}
                    className='group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end'
                    key={otherProduct.id}
                >
                    <Image
                        src={otherProduct.image}
                        alt={otherProduct.title}
                        width={300}
                        height={300}
                        quality={100}
                        className='group-hover:scale-105 transition-transform duration-500 bg-contain'
                    />
                    <div className='absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
                        <span className='text-sm truncate'>{otherProduct.title}</span>
                        <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>{otherProduct.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })}</span>
                    </div>
                </Link>
            ))}

        </div>
    )
}

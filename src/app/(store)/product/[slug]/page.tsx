import api from '@/data/api'
import Image from 'next/image'
import React from 'react'
import IParamsSlug from '@/data/types/IParamsSlug'
import IProduct from '@/data/types/IProduct'
import { Metadata } from 'next'

async function getProduct(slug: string) : Promise<IProduct> {
    const res = await api(`/product/${slug}`,{cache:'no-store'})
    return await res.json()
}

export async function generateMetadata({params} : {params: IParamsSlug}) : Promise<Metadata> {
    const {slug} = await params,
        Product = await getProduct(slug)
    return {
        title: Product.title
    }
}

//função para criar paginas estaticas que recebem um parametro, cacheando a pagina para o primeiro user
export function generateStaticParams(){
    return [{slug:'moletomVermelho'}]
}
//usar muito disso vai aumentar o tempo de build, usar com com moderação


export default async function ProductPage({params} : {params: IParamsSlug}) {
    const {slug} = await params,
        Product = await getProduct(slug),
        tamanhos = ["P", "M", "G", "GG"]

    return (
        <div className='grid max-h-[700px] grid-cols-3'>
            <div className='col-span-2 overflow-hidden'>
                <Image
                    className='max-h-[610px] max-w-[610px] flex justify-self-start'
                    alt={Product.slug}
                    src={Product.image}
                    width={1000}
                    height={1000}
                    quality={100}
                />
            </div>

            <div className='flex flex-col justify-center px-12'>
                <h1 className='text-3xl font-bold leading-tight'>{Product.title}</h1>

                <p className='mt-2 leading-relaxed text-zinc-400'>{Product.description}</p>

                <div className='mt-8 flex items-center gap-3'>
                    <span className='inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold'>{Product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })}</span>

                    <span className='text-sm text-zinc-400'>Em 12x s/ juros de {(Product.price / 12).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</span>
                </div>

                <div className='mt-8 space-y-4'>
                    <span className='block font-semibold'>Tamanhos</span>
                    <div className='flex gap-2'>
                        {tamanhos.map((tamanho, i)=>(
                            <button
                                key={i}
                                className='flex h-9 w-19 items-center justify-center rounded-full border border-zinc-800 text-sm font-semibold cursor-pointer'
                                type='button'
                            >
                                {tamanho}
                            </button>
                        ))}
                    </div>
                </div>
                
                <button 
                    type='button' 
                    className='mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white cursor-pointer'
                >Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}

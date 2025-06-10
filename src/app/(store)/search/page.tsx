import Link from 'next/link'
import Image from 'next/image'
import api from '@/data/api'
import IProduct from '@/data/types/IProduct'

interface ISearchProps {
    q: string
}

async function getProducts(q:string) : Promise<IProduct[]> {
    const res = await api(`/products/search?q=${q}`)
    return await res.json()
}

export default async function SearchPage({searchParams}: {searchParams: ISearchProps}) {
    const {q} = await searchParams,
        Products = await getProducts(q)
    
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-sm'>Resultados para <span className='font-semibold'>{q}</span></p>

            <div className='grid grid-cols-3 gap-6'>
                {Products.length > 0 && Products.map(product=>(
                    <Link
                        href={`/product/${product.slug}`}
                        className='group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end'
                        key={product.id}
                        
                    >
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={400}
                            className='group-hover:scale-105 transition-transform duration-500 bg-contain'
                        />
                        <div className='absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
                            <span className='text-sm truncate'>{product.title}</span>
                            <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>{product.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            })}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

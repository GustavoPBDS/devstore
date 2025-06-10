import api from "@/data/api"
import IProduct from "@/data/types/IProduct"
import {env} from '@/env'
import { ImageResponse } from 'next/og'


export const alt = 'Product Image'
export const size = {
    width: 1200,
    height: 630,
}

async function getProduct(slug: string) : Promise<IProduct> {
    const res = await api(`/product/${slug}`,{next: {revalidate: 60*60}})
    return await res.json()
}

export const contentType = 'image/png'
 
export default async function ImageProduct({params} : {params: {slug:string}}) {
    const {slug} = await params,
        Product = await getProduct(slug),
        imageUrl = new URL(Product.image, env.APP_URL).toString()
    
    return new ImageResponse(
        (<div 
            style={{
                background: '#09090b',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <img src={imageUrl} alt={alt}/>
        </div>),
        {...size}
    )
}
import { z } from 'zod'
import data from '../../products/data.json'
import type {NextRequest} from 'next/server'

export async function GET(req: NextRequest) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const {searchParams} = req.nextUrl,
        query = z.string().parse(searchParams.get('q'))

    const Products = data.products.filter(product => {
        return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })
    
    return Response.json(Products)
}

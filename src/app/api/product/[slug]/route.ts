import data from '../../products/data.json'
import IParamsSlug from '@/data/types/IParamsSlug'

export async function GET(req: Request, {params}:{params:IParamsSlug}) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const {slug} = await params
    const Product = data.products.find(product => product.slug == slug)
    return Response.json(Product)
}

import data from './data.json'

export async function GET() {
    return Response.json({res: data.products})
}

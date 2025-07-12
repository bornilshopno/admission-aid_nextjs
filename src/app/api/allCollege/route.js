
import { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";



export async function GET(req, { params }) {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')
    let query = {}
    if (search.trim()) {
        query = {
            collage_Name: { $regex: search, $options: 'i' }
        }
    }
    const collegeCollection = await dbConnect(collectionNames.collegeCollection)
    const result = await collegeCollection.find(query).toArray()
    console.log(result);
    return NextResponse.json(result)

}
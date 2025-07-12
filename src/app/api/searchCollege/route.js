
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";



export async function GET(req, { params }) {
    
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')||""
    let query = {}
    if (search.trim()) {
        query = {
            collegeName: { $regex: search, $options: 'i' }
        }
    }
    const collegeCollection = dbConnect(collectionNames.collegeCollection)
    const result = await collegeCollection.find(query).toArray()
    console.log(result);
    return NextResponse.json(result)

}
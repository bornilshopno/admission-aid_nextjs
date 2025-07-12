
import { collectionNames } from "@/components/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const id = await params
    const collegeCollection = await dbConnect(collectionNames.collegeCollection)
    const query = { _id: new ObjectId(id) }
    const result = await collegeCollection.findOne(query)
    console.log('collage details', result);
    return NextResponse.json(result)

}
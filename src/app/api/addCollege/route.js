
import dbConnect,  { collectionNames, }from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";


export async function POST(req, { params }) {
    const body = await req.json()
    const collegeCollection = dbConnect(collectionNames.collegeCollection)
    const result = await collegeCollection.insertOne(body)
    console.log('add collage', result);
    return NextResponse.json(result)

}
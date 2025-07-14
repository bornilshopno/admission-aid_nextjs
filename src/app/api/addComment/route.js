
import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";


export async function POST(req, { params }) {
    const body = await req.json()
    const commentCollection = await dbConnect(collectionNames.commentCollection)
    const result = await commentCollection.insertOne(body)
    console.log('add comment', result);
    return NextResponse.json(result, {
        status: 200,
        headers: corsHeaders
    })
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}
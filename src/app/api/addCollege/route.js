import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();


    const db = await dbConnect(collectionNames.collegeCollection);

    const result = await db.insertOne(body);

    console.log('Added college:', result);
    return NextResponse.json(result);
}
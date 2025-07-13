import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params?.id; 

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const collegeCollection = await dbConnect(collectionNames.collegeCollection);
  const query = { _id: new ObjectId(id) };
  const result = await collegeCollection.findOne(query);

  if (!result) {
    return NextResponse.json({ error: "College not found" }, { status: 404 });
  }

  console.log('College details:', result);
  return NextResponse.json(result);
}
import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
    return Response.json({msg:"Get Route"})
}

export function POST(req: NextRequest) {
    return Response.json({ msg: "Post Route" })
}
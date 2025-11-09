import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest): NextResponse {
    console.log("req", request);
    return NextResponse.next()
}

// To filter request that middleware should be run on: 
export const config = {
    matcher: "/news"
}
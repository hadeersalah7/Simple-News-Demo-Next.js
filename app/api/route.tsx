import { NextRequest } from 'next/server';

export function GET(request: NextRequest): Response {
    console.log(request)
    return new Response("Hello ^_^")
}
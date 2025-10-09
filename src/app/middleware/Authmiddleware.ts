import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../app/api/auth/[...nextauth]/route"; 

export async function GET(req:NextRequest){
const session = await getServerSession(authOptions)


if (session) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
}else{
      return NextResponse.redirect(new URL("/signin", req.url));
}
}
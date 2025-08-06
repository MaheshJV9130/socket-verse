import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("sessionId")?.value;
  const path = req.nextUrl.pathname;
  const publicPath = ["/auth" ,'/welcome' , '/recover' , '/explore'];

  if (!token && !publicPath.includes(path)) {
    return NextResponse.redirect(
      new URL(`${process.env.BASE_URL}/welcome`, req.url)
    );
  }

  if (token && publicPath.includes(path)) {
   
      return NextResponse.redirect(new URL("/", req.url));
   
      
    
  }
  return NextResponse.next()
}
export const config = {
  matcher: ['/','/welcome','/auth','/chat/:path*','/logout','/recover'],
};
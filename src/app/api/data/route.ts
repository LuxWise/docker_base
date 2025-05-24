import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  await fetch(
    `http://localhost:8084/mail/send?email=jcsanchez.martinez.2020@gmail.com`,
    {
      method: "GET",
    }
  );

  return NextResponse.json({ data: body }, { status: 200 });
}

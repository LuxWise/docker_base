import { NextRequest, NextResponse } from "next/server";

let data: { id: number; value: string }[] = [{ id: 1, value: "Ejemplo" }];

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
    value: body.value,
  };
  data.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  data = data.filter(item => item.id !== body.id);
  return NextResponse.json({ ok: true });
}

import { revalidateTag } from "next/cache";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const parse = await res.json();

  return NextResponse.json(parse);
}

export async function POST(
  req: NextRequest,
  { params }: { params: { tag: string } }
) {
  revalidateTag(params.tag);
  return NextResponse.json({ revalidated: params.tag });
}

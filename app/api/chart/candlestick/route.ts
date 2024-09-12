import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/candlestick-data/`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: `HTTP error! status: ${response.status}` },
        { status: 500 }
      );
    }
    const data = await response.json();
    if (data === null) {
      throw new Error(`Failed to fetch data`);
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching data`, error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

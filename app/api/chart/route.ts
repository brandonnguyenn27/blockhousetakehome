import { NextRequest, NextResponse } from "next/server";

async function fetchDataFromDjango(endpoint: string) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const chart = searchParams.get("chart");
    console.log(chart);

    if (!chart) {
      return NextResponse.json(
        { error: "Chart parameter is required" },
        { status: 400 }
      );
    }

    const data = await fetchDataFromDjango(`${chart}-data`);

    if (data === null) {
      throw new Error(`Failed to fetch data for chart: ${chart}`);
    }
    const transformedData = data.labels.map((label: string, index: number) => ({
      name: label,
      value: data.data[index],
    }));

    return NextResponse.json({ data: transformedData });
  } catch (error: unknown) {
    console.error(`Error in GET request:`, error);
    const errorMessage = error as Error;
    return NextResponse.json({ errorMessage }, { status: 500 });
  }
}

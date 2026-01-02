import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Example API endpoint
    const data = {
      message: "Hello from the API!",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    };

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Example POST endpoint
    const response = {
      message: "Data received successfully",
      received: body,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

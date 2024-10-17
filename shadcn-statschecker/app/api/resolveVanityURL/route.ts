// /app/api/resolveVanityURL/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const vanityurl = searchParams.get("vanityurl");

  if (!vanityurl) {
    return NextResponse.json({ error: "Vanity URL not provided" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=0C9161E3CE13B3B49603C57DDD59AE93&vanityurl=${vanityurl}`
    );

    if (!response.ok) {
      console.error("Error fetching from Steam API:", response.statusText);
      return NextResponse.json(
        { error: "Failed to resolve Steam Vanity URL" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

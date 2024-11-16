import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const steamid = searchParams.get("steamid");
  const appid = searchParams.get("appid");

  if (!steamid || !appid) {
    return NextResponse.json({ error: "SteamID and AppID are required" }, { status: 400 });
  }

  const response = await fetch(`https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key={INSERTKEYHEREREMOVEBRACKETS}&steamid=${steamid}&appid=${appid}`);
  const data = await response.json();

  return NextResponse.json(data);
}

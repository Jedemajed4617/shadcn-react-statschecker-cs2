"use client"; // Required to use useState and other client-side hooks

import React, { useState } from "react";
import { StatsProvider } from './statscontext';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }){
  const [stats, setStats] = useState<Record<string, number> | null>(null);
  const [inputValue, setInputValue] = useState('');

  // Function to fetch the SteamID from a custom URL
  const resolveVanityURL = async (vanityUrl: string) => {
    try {
      const response = await fetch(`/api/resolveVanityURL?vanityurl=${vanityUrl}`);
      
      // Ensure the response is OK
      if (!response.ok) {
        console.error("API call failed with status:", response.status);
        return null;
      }
      
      const data = await response.json();
      return data.response.steamid;
    } catch (error) {
      console.error("Error resolving vanity URL:", error);
      return null;
    }
  };

  const handleSearch = async () => {
    let steamId;
  
    if (inputValue.includes('steamcommunity.com')) {
      if (inputValue.includes('/id/')) {
        const vanityUrl = inputValue.split('/id/')[1].replace('/', '');
        steamId = await resolveVanityURL(vanityUrl);
      } else if (inputValue.includes('/profiles/')) {
        steamId = inputValue.split('/profiles/')[1].replace('/', '');
      }
    } else {
      steamId = inputValue.trim();
    }
  
    if (steamId) {
      const apiUrl = `/api/getUserStats?appid=730&steamid=${steamId}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        // Extract and convert stats array to an object
        const statsArray = data?.playerstats?.stats || [];
        const stats = statsArray.reduce((acc: Record<string, number>, stat: { name: string; value: number }) => {
          acc[stat.name] = stat.value;
          return acc;
        }, {});

        setStats(stats);
        console.log(stats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    } else {
      console.log('Invalid Steam ID or Profile Link.');
    }
  };
  

  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <b className="content">CS2 Stats Checker</b>
            <div className="search">
              <input
                type="text"
                placeholder="Search for a player (Steam ID / Steam Profile Link / Custom Steam URL)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <button onClick={handleSearch}>Search...</button>
            </div>
          </div>
        </header>
        <StatsProvider value={{stats, setStats}}>
          <div>{children}</div>
        </StatsProvider>
        <footer>
          <div>
            <b className="copy">Copyright © 2024 - Tygo Jedema</b>
          </div>
        </footer>
      </body>
    </html>
  );
}
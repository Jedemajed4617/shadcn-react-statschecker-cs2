// import "./home.css";
// import React, { useEffect, useState } from "react";
// import { Label, Pie, PieChart, Bar, BarChart, CartesianGrid, XAxis, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
// import {Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
// import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"

// interface Stat {
//   kills: number;
//   deaths: number;
//   wins: number;
//   total_wins: number;
//   total_mvps: number;
//   total_time_played: number;
//   total_kills_headshot: number;
//   total_planted_bombs: number;
//   total_defused_bombs: number;
//   total_money_earned: number;
//   last_match_t_wins: number;
//   last_match_ct_wins: number;
//   last_match_wins: number;
//   last_match_kills: number;
//   last_match_deaths: number;
//   last_match_mvps: number;
//   last_match_favweapon_id: number;
//   last_match_damage: number;
//   last_match_money_spent: number;
//   total_kills: number;
//   total_deaths: number; 
//   [key: `total_wins_map_${string}`]: number;
//   [key: `total_kills_${string}`]: number;
//   [key: `total_hits_${string}`]: number;
// }

// interface HomeProps {
//   stats: Stat;
// }

// // Define the Home component and explicitly type its props
// export default function Home({stats}: HomeProps) {

//   useEffect(() => {
//     if (stats && Object.keys(stats).length > 0) {
//       console.log(stats);
//     }
//   }, [stats]);

//   const hasStats = stats && Object.keys(stats).length > 0;

//   // CCHARTCONFIG
//   const chartConfig = {
//     kills: {
//       label: "Kills",
//       color: "hsl(var(--chart-1))",
//     },
//   } satisfies ChartConfig;

//   // CHARTS:
//   const chartData = [
//     { map: "Dust2", wins: stats?.total_wins_map_de_dust2 || 0, fill: "#FF5733" },  // Red
//     { map: "Mirage", wins: stats?.total_wins_map_de_mirage || 0, fill: "#33FF57" },  // Green
//     { map: "Inferno", wins: stats?.total_wins_map_de_inferno || 0, fill: "#3357FF" },  // Blue
//     { map: "Overpass", wins: stats?.total_wins_map_de_overpass || 0, fill: "#FFFF33" },  // Yellow
//     { map: "Nuke", wins: stats?.total_wins_map_de_nuke || 0, fill: "#FF33FF" },  // Magenta
//     { map: "Train", wins: stats?.total_wins_map_de_train || 0, fill: "#33FFFF" },  // Cyan
//     { map: "Lake", wins: stats?.total_wins_map_de_lake || 0, fill: "#FF3333" },  // Light Red
//     { map: "Cobble", wins: stats?.total_wins_map_de_cbble || 0, fill: "#33FF33" },  // Light Green
//     { map: "Office", wins: stats?.total_wins_map_cs_office || 0, fill: "#3333FF" },  // Light Blue
//     { map: "Italy", wins: stats?.total_wins_map_cs_italy || 0, fill: "#FFFF33" },  // Yellow
//     { map: "Assault", wins: stats?.total_wins_map_cs_assault || 0, fill: "#FF5733" },  // Red
//     { map: "Baggage", wins: stats?.total_wins_map_ar_baggage || 0, fill: "#FF33FF" },  // Magenta
//     { map: "Monastery", wins: stats?.total_wins_map_ar_monastery || 0, fill: "#33FFFF" },  // Cyan
//     { map: "Shoots", wins: stats?.total_wins_map_ar_shoots || 0, fill: "#FF3333" },  // Light Red
//     { map: "Safehouse", wins: stats?.total_wins_map_de_safehouse || 0, fill: "#33FF33" },  // Light Green
//     { map: "Vertigo", wins: stats?.total_wins_map_de_vertigo || 0, fill: "#3357FF" },  // Blue
//   ];

//   const chartData2 = [
//     { weapon: "AK47", kills: stats?.total_kills_ak47 || 0 },
//     { weapon: "M4A1", kills: stats?.total_kills_m4a1 || 0 },
//     { weapon: "AWP", kills: stats?.total_kills_awp || 0 },
//     { weapon: "AUG", kills: stats?.total_kills_aug || 0 },
//     { weapon: "Bizon", kills: stats?.total_kills_bizon || 0 },
//     { weapon: "Deagle", kills: stats?.total_kills_deagle || 0 },
//     { weapon: "Famas", kills: stats?.total_kills_famas || 0 },
//     { weapon: "Five-Seven", kills: stats?.total_kills_fiveseven || 0 },
//     { weapon: "G3SG1", kills: stats?.total_kills_g3sg1 || 0 },
//     { weapon: "Glock", kills: stats?.total_kills_glock || 0 },
//     { weapon: "HKP2000", kills: stats?.total_kills_hkp2000 || 0 },
//     { weapon: "M249", kills: stats?.total_kills_m249 || 0 },
//     { weapon: "MAC10", kills: stats?.total_kills_mac10 || 0 },
//     { weapon: "MAG7", kills: stats?.total_kills_mag7 || 0 },
//     { weapon: "MP7", kills: stats?.total_kills_mp7 || 0 },
//     { weapon: "MP9", kills: stats?.total_kills_mp9 || 0 },
//     { weapon: "Negev", kills: stats?.total_kills_negev || 0 },
//     { weapon: "Nova", kills: stats?.total_kills_nova || 0 },
//     { weapon: "P90", kills: stats?.total_kills_p90 || 0 },
//     { weapon: "P250", kills: stats?.total_kills_p250 || 0 },
//     { weapon: "Sawed-Off", kills: stats?.total_kills_sawedoff || 0 },
//     { weapon: "SSG08", kills: stats?.total_kills_ssg08 || 0 },
//     { weapon: "Taser", kills: stats?.total_kills_taser || 0 },
//     { weapon: "TEC9", kills: stats?.total_kills_tec9 || 0 },
//     { weapon: "UMP45", kills: stats?.total_kills_ump45 || 0 },
//     { weapon: "XM1014", kills: stats?.total_kills_xm1014 || 0 },
//   ];

//   const chartData3 = [
//     { weapon: "AK47", hits: stats?.total_hits_ak47 || 0 },
//     { weapon: "M4A1", hits: stats?.total_hits_m4a1 || 0 },
//     { weapon: "AWP", hits: stats?.total_hits_awp || 0 },
//     { weapon: "AUG", hits: stats?.total_hits_aug || 0 },
//     { weapon: "Bizon", hits: stats?.total_hits_bizon || 0 },
//     { weapon: "Deagle", hits: stats?.total_hits_deagle || 0 },
//     { weapon: "Famas", hits: stats?.total_hits_famas || 0 },
//     { weapon: "Five-Seven", hits: stats?.total_hits_fiveseven || 0 },
//     { weapon: "Glock", hits: stats?.total_hits_glock || 0 },
//     { weapon: "M249", hits: stats?.total_hits_m249 || 0 },
//     { weapon: "MAC10", hits: stats?.total_hits_mac10 || 0 },
//     { weapon: "MAG7", hits: stats?.total_hits_mag7 || 0 },
//     { weapon: "MP7", hits: stats?.total_hits_mp7 || 0 },
//     { weapon: "MP9", hits: stats?.total_hits_mp9 || 0 },
//     { weapon: "Negev", hits: stats?.total_hits_negev || 0 },
//     { weapon: "Nova", hits: stats?.total_hits_nova || 0 },
//     { weapon: "P90", hits: stats?.total_hits_p90 || 0 },
//     { weapon: "P250", hits: stats?.total_hits_p250 || 0 },
//     { weapon: "Sawed-Off", hits: stats?.total_hits_sawedoff || 0 },
//     { weapon: "SSG08", hits: stats?.total_hits_ssg08 || 0 },
//     { weapon: "TEC9", hits: stats?.total_hits_tec9 || 0 },
//     { weapon: "UMP45", hits: stats?.total_hits_ump45 || 0 },
//     { weapon: "XM1014", hits: stats?.total_hits_xm1014 || 0 },
//   ];

//   // OTHER
//   const weaponMap = {
//     1: 'Deagle',
//     2: 'Elite',
//     3: 'Five-Seven',
//     4: 'Glock',
//     7: 'AK-47',
//     8: 'AUG',
//     9: 'AWP',
//     10: 'FAMAS',
//     11: 'G3SG1',
//     13: 'Galil',
//     14: 'M249',
//     16: 'M4A1',
//     17: 'MAC-10',
//     19: 'P90',
//     24: 'UMP',
//     25: 'XM1014',
//     26: 'Bizon',
//     27: 'MAG-7',
//     28: 'Negev',
//     29: 'Sawed-Off',
//     30: 'Tec-9',
//     31: 'Taser',
//     32: 'HKP2000',
//     33: 'MP7',
//     34: 'MP9',
//     35: 'Nova',
//     36: 'P250',
//     38: 'SCAR-20',
//     39: 'SG556',
//     40: 'SSG08',
//     42: 'Knife',
//     43: 'Flashbang',
//     44: 'HE Grenade',
//     45: 'Smoke Grenade',
//     46: 'Molotov',
//     47: 'Decoy',
//     48: 'Incendiary Grenade',
//     49: 'C4',
//     59: 'Knife (T)',
//     60: 'M4A1 (Silencer)',
//     61: 'USP (Silencer)',
//     63: 'CZ75-A',
//     64: 'Revolver',
//     500: 'Bayonet',
//     505: 'Flip Knife',
//     506: 'Gut Knife',
//     507: 'Karambit',
//     508: 'M9 Bayonet',
//     509: 'Tactical Knife',
//     512: 'Falchion Knife',
//     514: 'Survival Bowie Knife',
//     515: 'Butterfly Knife',
//     516: 'Push Knife',
//     526: 'Kukri',
//   };

//   // RETURN THIS:

//   return (
//     <div className='statChecker_container'>
//       {!stats ? (  // Check if stats is undefined or null
//         <div className="loading">No stats available to show.</div>
//       ) : hasStats ? (
//         <>
//           <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
//           <script src="./script.js"></script>
//           <div className="wrapper">
//             <div className="activity card">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-3xl">Total Kills Per Weapon</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ChartContainer config={chartConfig} className="w-full max-h-[195px]">
//                     <BarChart accessibilityLayer data={chartData2}>
//                       <CartesianGrid vertical={false} />
//                       <XAxis
//                         dataKey="weapon"
//                         tickLine={false}
//                         tickMargin={10}
//                         axisLine={false}
//                         tickFormatter={(value) => value.slice(0, 3)}
//                       />
//                       <ChartTooltip
//                         cursor={false}
//                         content={<ChartTooltipContent className="w-[12.5rem] h-[3rem] text-2xl" hideLabel />}
//                       />
//                       <Bar dataKey="kills" fill="var(--color-desktop)" radius={8} />
//                     </BarChart>
//                   </ChartContainer>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="discount card">
//               <Card className="flex flex-col">
//                 <CardHeader className="items-center pb-0">
//                   <CardTitle className="text-3xl">Total wins per map</CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex-1 pb-0">
//                   <ChartContainer
//                     config={chartConfig}
//                     className="mx-auto aspect-square max-h-[225px]"
//                   >
//                     <PieChart>
//                       <ChartTooltip
//                         cursor={false}
//                         content={<ChartTooltipContent className="w-[12.5rem] h-[3rem] text-2xl" hideLabel />}
//                       />
//                       <Pie
//                         data={chartData}
//                         dataKey="wins"
//                         nameKey="map"
//                         innerRadius={55}
//                         strokeWidth={5}
//                       >
//                         <Label
//                           content={({ viewBox }) => {
//                             if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                               return (
//                                 <text
//                                   x={viewBox.cx}
//                                   y={viewBox.cy}
//                                   textAnchor="middle"
//                                   dominantBaseline="middle"
//                                 >
//                                   <tspan
//                                     x={viewBox.cx}
//                                     y={viewBox.cy}
//                                     className="fill-foreground text-3xl font-bold"
//                                   >
//                                     {stats.total_wins}
//                                   </tspan>
//                                   <tspan
//                                     x={viewBox.cx}
//                                     y={(viewBox.cy || 0) + 24}
//                                     className="fill-muted-foreground text-xl"
//                                   >
//                                     Total wins
//                                   </tspan>
//                                 </text>
//                               )
//                             }
//                           }}
//                         />
//                       </Pie>
//                     </PieChart>
//                   </ChartContainer>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="bappo card">
//               <Card>
//                 <CardHeader className="items-center pb-4">
//                   <CardTitle className="text-3xl">Total Hits Per Weapon</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pb-0" >
//                   <ChartContainer
//                     config={chartConfig}
//                     className="mx-auto aspect-square max-h-[215px]"
//                   >
//                     <RadarChart data={chartData3}>
//                       <ChartTooltip cursor={false} content={<ChartTooltipContent className="w-[12.5rem] h-[5rem] text-2xl" />} />
//                       <PolarAngleAxis dataKey="weapon" />
//                       <PolarGrid />
//                       <Radar
//                         dataKey="hits"
//                         fill="var(--color-desktop)"
//                         fillOpacity={0.6}
//                       />
//                     </RadarChart>
//                   </ChartContainer>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="totals card">
//               <div className="account-container">
//                 <div className="account-cash">Total Kills: </div>
//                 <div className="account-cash">{stats.total_kills || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total Deaths: </div>
//                 <div className="account-cash">{stats.total_deaths || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total Wins: </div>
//                 <div className="account-cash">{stats.total_wins || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total MVP: </div>
//                 <div className="account-cash">{stats.total_mvps || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total Time Played: </div>
//                 <div className="account-cash">{stats.total_time_played || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total Headshot Kills: </div>
//                 <div className="account-cash">{stats.total_kills_headshot || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total Bombs Planted: </div>
//                 <div className="account-cash">{stats.total_planted_bombs || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total Bombs Defused: </div>
//                 <div className="account-cash">{stats.total_defused_bombs || 'NaN'}</div>
//               </div>
//               <div className="account-container">
//                 <div className="account-cash">Total Money Earned: </div>
//                 <div className="account-cash">{stats.total_money_earned || 'NaN'}</div>
//               </div>
//             </div>
//           </div>
//           <div className="upperStatsContainer">
//             <div className="statsContainer">
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match T Wins:</p>
//                 <b>{stats.last_match_t_wins || 'NaN'}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match CT Wins:</p>
//                 <b>{stats.last_match_ct_wins || 'NaN'}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match Wins:</p>
//                 <b>{stats.last_match_wins || 'NaN'}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match Kills:</p>
//                 <b>{stats.last_match_kills || 'NaN'}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match Deaths:</p>
//                 <b>{stats.last_match_deaths || 'NaN'}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match K/D Ratio:</p>
//                 <b>
//                   {stats.last_match_deaths === 0
//                     ? (stats.last_match_kills ? stats.last_match_kills.toFixed(2) : 'NaN')
//                     : (stats.last_match_kills / stats.last_match_deaths).toFixed(2)}
//                 </b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match MVP's:</p>
//                 <b>{stats.last_match_mvps}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match Favorite Weapon:</p>
//                 <b>{weaponMap[stats.last_match_favweapon_id as keyof typeof weaponMap] || 'NaN'}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match Total Damage:</p>
//                 <b>{stats.last_match_damage || 'NaN'}</b>
//               </div>
//               <div className="statsContainer-last">
//                 <p className="statsContainer-title">Last Match Money Spent:</p>
//                 <b>{stats.last_match_money_spent || 'NaN'}</b>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         // If no stats, display a fallback message
//         <p className="loading">No stats available.</p>
//       )}
//     </div>
//     // THis all was made using tailwindcss and shadcnUI together with NextJS...
//   );
// };
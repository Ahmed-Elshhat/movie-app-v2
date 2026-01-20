// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const servers = [
//   {
//     name: "Server 1",
//     iframe: "https://example.com/server1",
//   },
//   {
//     name: "Server 2",
//     iframe: "https://example.com/server2",
//   },
// ];

// const episodes = Array.from({ length: 10 }, (_, i) => i + 1);

// export default function WatchEpisodePage({
//   params,
// }: {
//   params: { series: string; episode: string };
// }) {
//   const [activeServer, setActiveServer] = useState(servers[0]);

//   return (
//     <div className="watch-page">
//       {/* VIDEO */}
//       <div className="video-box">
//         <iframe
//           src={activeServer.iframe}
//           allowFullScreen
//         />
//       </div>

//       {/* SERVERS */}
//       <div className="servers">
//         {servers.map((server) => (
//           <button
//             key={server.name}
//             className={
//               server.name === activeServer.name
//                 ? "active"
//                 : ""
//             }
//             onClick={() => setActiveServer(server)}
//           >
//             {server.name}
//           </button>
//         ))}
//       </div>

//       {/* EPISODES */}
//       <div className="episodes">
//         {episodes.map((ep) => (
//           <Link
//             key={ep}
//             href={`/watch/${params.series}/${ep}`}
//             className={
//               ep.toString() === params.episode
//                 ? "episode active"
//                 : "episode"
//             }
//           >
//             الحلقة {ep}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


import WatchEpisodeClient from "./WatchEpisodeClient";

export default async function WatchEpisodePage({
  params,
}: {
  params: Promise<{ series: string; episode: string }>;
}) {
  const { series, episode } = await params;

  return (
    <WatchEpisodeClient
      series={series}
      episode={episode}
    />
  );
}

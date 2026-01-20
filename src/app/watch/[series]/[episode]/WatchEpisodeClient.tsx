"use client";

import { useState } from "react";
import Link from "next/link";

const episodes = [
  {
    episodeNumber: 1,
    servers: [
      { name: "Server 1", iframe: "https://voe.sx/e/qyc5n0qaxipi" },
      { name: "Server 2", iframe: "https://uqload.ws/embed-4p5xj067ympj.html" },
      {
        name: "Server 3",
        iframe:
          "https://km270l.cloudatacdn.com/u5kj7pcyddblsdgge4mp2oq5dk4kpxrysazq6ynjzb7kmg5kvrds6d72gpdq/6l7hmgsxv8~mKnnBPIJuP?token=ipnpfw4581hed0ll3nd8bcc2&expiry=1768880179961",
      },
    ],
  },
  {
    episodeNumber: 2,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/mtj5mvyi3fd7" }],
  },
  {
    episodeNumber: 3,
    servers: [
      { name: "Server 1", iframe: "https://uqload.ws/embed-a3uephe9z0jh.html" },
    ],
  },
  {
    episodeNumber: 4,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/xzww3iiazppo" }],
  },
  {
    episodeNumber: 5,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/udsv6ymjebsp" }],
  },
  {
    episodeNumber: 6,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/2hvtqadsarzy" }],
  },
  {
    episodeNumber: 7,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/jtlpqkc0fmwi" }],
  },
  {
    episodeNumber: 8,
    servers: [
      { name: "Server 1", iframe: "https://uqload.ws/embed-3wp5kk7uia61.html" },
      {
        name: "Server 2",
        iframe: "https://w.vidoba.site/embed-l3d64mtzk0d0.html",
      },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-7ws39puwxm38.html" },
      {
        name: "Server 4",
        iframe: "https://uqload.net/embed-ukcxdymui6xh.html",
      },
    ],
  },
  {
    episodeNumber: 9,
    servers: [
      {
        name: "Server 1",
        iframe: "https://vidoba.org/embed-qlgnevvcdt4h.html",
      },
      {
        name: "Server 2",
        iframe: "https://w.vidoba.site/embed-06i6fjnraka9.html",
      },
      { name: "Server 3", iframe: "https://vfaststream.com/Z8tinSwrmQFHL" },
      { name: "Server 4", iframe: "https://bgwp.cc/embed-c66xs6vft1dt.html" },
      {
        name: "Server 5",
        iframe: "https://vidspeeds.com/embed-qh0yatcb3gp6.html",
      },
      {
        name: "Server 6",
        iframe: "https://vidroba.com/embed-qlgnevvcdt4h.html",
      },
      { name: "Server 7", iframe: "https://vidply.com/e/8r2orf99t3vi" },
    ],
  },
  {
    episodeNumber: 10,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/0vfeve5qlqft" }],
  },
  {
    episodeNumber: 11,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/ru4lukase5cf" }],
  },
  {
    episodeNumber: 12,
    servers: [{ name: "Server 1", iframe: "https://voe.sx/e/srxcfbrtjowo" }],
  },
  {
    episodeNumber: 13,
    servers: [
      {
        name: "Server 1",
        iframe: "https://vkvideo.ru/video_ext.php?oid=889575023&id=456240081",
      },
    ],
  },
  {
    episodeNumber: 14,
    servers: [
      {
        name: "Server 1",
        iframe: "https://rty1.film77.xyz/embed-cuj6b3ylu9a7.html",
      },
    ],
  },
  {
    episodeNumber: 15,
    servers: [
      { name: "Server 1", iframe: "https://voe.sx/e/zrydr5kbmqxj" },
      { name: "Server 2", iframe: "https://vfaststream.com/wvt1TDeMIrf5m" },
      {
        name: "Server 3",
        iframe: "https://vidspeeds.com/embed-axqp27zdzcec.html",
      },
      {
        name: "Server 4",
        iframe: "https://vidroba.com/embed-md5bz25hmhby.html",
      },
      { name: "Server 5", iframe: "https://voe.sx/e/zrydr5kbmqxj" },
      { name: "Server 6", iframe: "https://vidply.com/e/cyi2m4qvy7u8" },
    ],
  },
  {
    episodeNumber: 16,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-ut0r4lvcfexf.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/IN65tYKygJwvz" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-ig4p5zwnwq5c.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-xei7oglvd3uo.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-5cvofxwe99yg.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/gvyw3usscscn" },
    ],
  },
  {
    episodeNumber: 17,
    servers: [
      { name: "Server 1", iframe: "https://vfaststream.com/UiRgtbG0Xescd" },
      { name: "Server 2", iframe: "https://bgwp.cc/embed-bz2tlsya4v6r.html" },
      {
        name: "Server 3",
        iframe: "https://vidspeeds.com/embed-efcwyapwoxy7.html",
      },
      {
        name: "Server 4",
        iframe: "https://vidroba.com/embed-ssjshzha3cyq.html",
      },
      { name: "Server 5", iframe: "https://voe.sx/e/ozawzgkmvfhe" },
    ],
  },
  {
    episodeNumber: 18,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-gx0h8prh5tig.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/upmMHtlK1YCjd" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-nwnk72sb5lxl.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-n4uv8u3zl16u.html",
      },
      { name: "Server 5", iframe: "https://voe.sx/e/fulne9cmuya2" },
      { name: "Server 6", iframe: "https://vidply.com/e/0vepwyrgby8j" },
    ],
  },
  {
    episodeNumber: 19,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-bcs9typ2wu5o.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/bEgtGhWO0yqTD" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-gbx6dobhwu8k.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-nwk938ghunqr.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-rl64f6hrapxl.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/rwpmeud0pfie" },
    ],
  },
  {
    episodeNumber: 20,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-d4n46qiwud01.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/4l7YoaR9MXWAD" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-r46p0y2qhcrd.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-f9oh6r4mmxf9.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-0xhmawgvwwl5.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/x5marrmv6t4m" },
    ],
  },
  {
    episodeNumber: 21,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-moh8vt82m82j.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/ZMF8lhSjnN9y6" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-mzmrezo9ie4y.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-zo9sf1rnhff9.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-4g616tb4dmtz.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/8iviqtkig9ie" },
    ],
  },
  {
    episodeNumber: 22,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-wdrzxkzlv9xq.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/9KbPHmxhtTEai" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-niwsntlh7zu2.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-v7gtlf20i3fu.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-pwjqdwviq1yp.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/onnajnskb0qe" },
    ],
  },
  {
    episodeNumber: 23,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-6hjbv2xym37k.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/o7TdrB1OulRbQ" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-g2vacztbqbve.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-vvdp434oywpt.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-wn4iwg5nxewp.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/jqjo5non87ry" },
    ],
  },
  {
    episodeNumber: 24,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-xkleeqqlcukg.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/3elMKHOrbmGXI" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-os7jw3b07wwl.html" },
    ],
  },
  {
    episodeNumber: 25,
    servers: [
      { name: "Server 1", iframe: "https://bgwp.cc/embed-os7jw3b07wwl.html" },
      { name: "Server 2", iframe: "https://vfaststream.com/uJh92YD7lrKQO" },
      { name: "Server 3", iframe: "https://short.icu/pQhy1e1NB" },
      { name: "Server 4", iframe: "https://bgwp.cc/embed-qoxacjom8ua3.html" },
      {
        name: "Server 5",
        iframe: "https://vidspeeds.com/embed-qtkahqqo4oo1.html",
      },
      {
        name: "Server 6",
        iframe: "https://vidroba.com/embed-6lf0ignjvi67.html",
      },
    ],
  },
  {
    episodeNumber: 26,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-7lun3r22k9nv.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/St7La2FfQrY6h" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-meppkdghfzx3.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-1tij85kgpmso.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-20s3zcpdfnal.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/pk686l3lwvof" },
    ],
  },
  {
    episodeNumber: 27,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-oteb3dr6u85g.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/Yxq0OMyB9rlkt" },
      { name: "Server 3", iframe: "https://short.icu/XiAEqA7Lb" },
      { name: "Server 4", iframe: "https://bgwp.cc/embed-vigxxqgesz6f.html" },
      {
        name: "Server 5",
        iframe: "https://vidspeeds.com/embed-mydsr0u99mhz.html",
      },
      {
        name: "Server 6",
        iframe: "https://vidroba.com/embed-jdqsqpvsbh6h.html",
      },
    ],
  },
  {
    episodeNumber: 28,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-jjqjppam9am2.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/YF9JcBaiTbGln" },
      { name: "Server 3", iframe: "https://bgwp.cc/embed-0r3d7fdtjpxu.html" },
      {
        name: "Server 4",
        iframe: "https://vidspeeds.com/embed-ez27enjvpz28.html",
      },
      {
        name: "Server 5",
        iframe: "https://vidroba.com/embed-adm9rfgddt9y.html",
      },
      { name: "Server 6", iframe: "https://voe.sx/e/85s7dfrtx9sp" },
    ],
  },
  {
    episodeNumber: 29,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-7ozghfkh0gr9.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/HEUjlwRKs73MC" },
      { name: "Server 3", iframe: "https://short.icu/eQSavn1AX" },
      { name: "Server 4", iframe: "https://bgwp.cc/embed-3xmcc0567xse.html" },
      {
        name: "Server 5",
        iframe: "https://vidspeeds.com/embed-6rgikutaqr22.html",
      },
      {
        name: "Server 6",
        iframe: "https://vidroba.com/embed-cr77gkbp7jax.html",
      },
    ],
  },
  {
    episodeNumber: 30,
    servers: [
      {
        name: "Server 1",
        iframe: "https://w.vidoba.site/embed-uq1eza6l8isa.html",
      },
      { name: "Server 2", iframe: "https://vfaststream.com/XIlZBQNvVSmUF" },
      { name: "Server 3", iframe: "https://short.icu/61T3NoaaQ" },
      { name: "Server 4", iframe: "https://bgwp.cc/embed-o0mrgzsrc3bu.html" },
      {
        name: "Server 5",
        iframe: "https://vidspeeds.com/embed-a3wx706998y6.html",
      },
      {
        name: "Server 6",
        iframe: "https://vidroba.com/embed-p8jg20ydcoft.html",
      },
    ],
  },
];

export default function WatchEpisodeClient({
  series,
  episode,
}: {
  series: string;
  episode: string;
}) {
  // حول الحلقة اللي جاية من URL لـ index 0-based
  const episodeIndex = +episode - 1;
  const currentEpisode = episodes[episodeIndex];
  const [activeServer, setActiveServer] = useState(currentEpisode.servers[0]);

  // تأكد إنه موجود
  if (!currentEpisode) {
    return <div>الحلقة غير موجودة</div>;
  }

  return (
    <div className="watch-page">
      {/* VIDEO */}
      <div className="video-box">
        <iframe src={activeServer.iframe} allowFullScreen />
      </div>

      {/* SERVERS */}
      <div className="servers">
        {currentEpisode.servers.map((server) => (
          <button
            key={server.name}
            className={server.name === activeServer.name ? "active" : ""}
            onClick={() => setActiveServer(server)}
          >
            {server.name}
          </button>
        ))}
      </div>

      {/* EPISODES */}
      <div className="episodes">
        {episodes.map((ep) => (
          <Link
            key={ep.episodeNumber}
            href={`/watch/${series}/${ep.episodeNumber}`}
            className={
              ep.episodeNumber.toString() === episode
                ? "episode active"
                : "episode"
            }
          >
            الحلقة {ep.episodeNumber}
          </Link>
        ))}
      </div>
    </div>
  );
}

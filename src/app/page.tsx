import Image from "next/image";
import Link from "next/link";
import "./home.scss";

const movies = [
  {
    id: "1234",
    slug: "side-el-nas", // 👈 ده المهم
    title: "سيد الناس",
    poster: "/movies/side_el_nas_poster.jpeg",
    hero1: "/movies/side_el_nas_hero1.jpg",
    hero2: "/movies/side_el_nas_hero2.jpg",
    description: "مسلسل درامي اجتماعي مشوّق",
  },
];

export default function HomePage() {
  const featured = movies[0];

  return (
    <main className="home">
      {/* FEATURED HERO */}
      <section className="featured">
        <Image
          src={featured.hero2}
          alt={featured.title}
          fill
          priority
        />

        <div className="featured-overlay" />

        <div className="featured-content">
          <h1>{featured.title}</h1>
          <p>{featured.description}</p>

          <Link
            href={`/watch/${featured.slug}`}
            className="watch-btn"
          >
            ▶ مشاهدة الآن
          </Link>
        </div>
      </section>

      {/* GRID */}
      <section className="movies-grid">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/watch/${movie.slug}`}
            className="movie-card"
          >
            <div className="image-wrapper">
              <Image
                src={movie.poster}
                alt={movie.title}
                fill
              />
              <div className="overlay" />
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
// import Favourite from "../pages/Favourites";

export function MovieCard({ movie }) {
  const { isFavourites, addToFavourites, removeFromFavourites } =
    useMovieContext();
  const favourites = isFavourites(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourites) removeFromFavourites(movie.id);
    else addToFavourites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favourites ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

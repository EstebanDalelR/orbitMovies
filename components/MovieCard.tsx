const MovieCard = ({movie}) =>
  <article className="shadow rounded">
    <h3 className="text-2xl">
      {movie.original_title}
    </h3>
    <p>{movie.popularity}</p>
  </article>
export default MovieCard
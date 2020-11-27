import Image from "next/image"

const MovieCard = ({ movie, imgUrl }) =>
  <article className="shadow rounded flex flex-col items-center justify-center w-64 m-4 p-2">
    <Image src={`${imgUrl}${movie.backdrop_path}`} width={250} height={130} />
    <h3 className="text-2xl">
      {movie.original_title}
    </h3>
    <p>{movie.popularity}</p>
  </article>
export default MovieCard
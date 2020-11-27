import Image from "next/image"

const MovieCard = ({ movie, imgUrl }) =>
  <article className="shadow rounded flex flex-col items-center justify-center w-96 m-4 p-2 bg-white">
    <Image src={`${imgUrl}${movie.backdrop_path}`} width={350} height={250} />
    <h3 className="text-2xl">
      {movie.original_title}
    </h3>
    <p>{movie.popularity}</p>
  </article>
export default MovieCard
const Movie = ({ data }) => {
  let { movie, config } = data
  let imgUrl = `${config.images.base_url}${config.images.poster_sizes[5]}`
  return (
    <div>
      <div className="flex flex-wrap">
        <Image src={`${imgUrl}${movie.backdrop_path}`} width={350} height={250} />
        <div className="mx-8 flex flex-col items-start justify-around">
          <h1 className="text-4xl text-houm">{movie.original_title}</h1>
          <h3>{movie.title}</h3>
          <p>Original launch: {movie.release_date}</p>
          <div className="w-full flex justify-evenly">
            <p className="text-xl">{movie.vote_average}/10</p>
            <p className="text-xl">{movie.vote_count} votes</p>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Movie

import { GetServerSideProps } from 'next'
import Image from 'next/image'
type Data = { movie, config }
export const getServerSideProps: GetServerSideProps = async (context) => {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.TMDB_KEY}`)
  const config = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_KEY}`)
  const data: Data = { movie: await movie.json(), config: await config.json() }

  return {
    props: {
      data,
    },
  }
}

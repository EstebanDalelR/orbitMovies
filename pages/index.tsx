import { InferGetServerSidePropsType } from 'next'

const index = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  let { movies, config } = data
  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {movies.results.map((movie, i) =>
          <MovieCard movie={movie} key={i} imgUrl={`${config.images.base_url}${config.images.poster_sizes[4]}`} />)}
      </div>
    </div>
  )
}
export default index
import { GetServerSideProps } from 'next'
import MovieCard from '../components/MovieCard'
type Data = { movies, config }
export const getServerSideProps: GetServerSideProps = async (context) => {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}`)
  const config = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_KEY}`)
  const data: Data = { movies: await movies.json(), config: await config.json() }

  return {
    props: {
      data,
    },
  }
}

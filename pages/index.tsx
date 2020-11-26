import { InferGetServerSidePropsType } from 'next'

const index = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around">
      {data.results.map((movie, i) => <MovieCard movie={movie} key={i} />)}
      </div>
    </div>
  )
}
export default index
import { GetServerSideProps } from 'next'
import MovieCard from '../components/MovieCard'
type Data = { title: string }
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}`)
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

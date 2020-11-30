import { useEffect, useState } from 'react'
import useAuthenticatedSearch from "../hooks/useAuthenticatedSearch"

const index = ({ data }) => {
  const [shownMovies, setShownMovies] = useState([])
  let { movies, config } = data
  useEffect(() => {
    setShownMovies(movies)
  }, [movies])
  const searchMovies = (query) => {
    useAuthenticatedSearch(query)
      .then(resp =>
        resp.json().then(data => {
          let filtered = movies.filter((movie) =>
            movie.original_title.toLowerCase().includes(query.toLowerCase())
            || movie.title.toLowerCase().includes(query.toLowerCase()))
          let movieArray
          movieArray = data.results
          setShownMovies([...filtered, ...movieArray])
        })
      )
  }
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <input
          onChange={e => searchMovies(e.target.value)}
          placeholder="Search for movies"
          className="w-full md:w-1/2 lg:w-1/3 rounded my-2 h-7 border border-gray-400 px-2 py-1"
        ></input>
      </div>
      <div className="flex flex-wrap justify-around">
        {shownMovies.map((movie, i) =>
          <MovieCard movie={movie} key={i} imgUrl={`${config.images.base_url}${config.images.poster_sizes[4]}`} />)}
      </div>
    </div>
  )
}
export default index

import MovieCard from '../components/MovieCard'
type Data = { movies, config }
export const getStaticProps = async (context) => {
  const top_rated = await (await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}`)).json()
  const popular = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}`)).json()
  let movies = [...top_rated.results, ...popular.results]
  const config = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_KEY}`)
  const data: Data = { movies: movies, config: await config.json() }

  return {
    props: {
      data,
    },
    revalidate: 21600
  }
}

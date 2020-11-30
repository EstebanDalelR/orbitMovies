export const useAuthenticatedSearch = (query) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
    }
  }
  return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, defaultOptions)
}
export default useAuthenticatedSearch
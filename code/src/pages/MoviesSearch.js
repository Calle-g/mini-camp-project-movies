import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Grid } from '../styling/Grid'
import { Image } from '../styling/Image'
import { Spinner } from '../styling/Spinner'

export const MoviesSearch = ({ movies, setMovies }) => {
  const [maxPages, setMaxPages] = useState();
  const [page, setPage] = useState(1);
  const { query } = useParams();

  const fetchMovies = (next) => {
    const nextPage = next ? page + 1 : 1;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&include_adult=false&page=${nextPage}`)
      .then((res) => {
        if (res.ok) {
          if (next) {
            setPage(page + 1)
          } else {
            setPage(1)
          }
          return res.json();
        }
      })
      .then((json) => {
        if (next) {
          setMovies(movies.concat(json.results.filter((entry) => {
            return entry.poster_path;
          })))
        } else {
          setMaxPages(json.total_pages)
          setMovies(json.results.filter((entry) => {
            return entry.poster_path;
          }))
        }
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchMovies();
  }, [query])

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => fetchMovies(true)}
        hasMore={maxPages !== 1 && page <= maxPages}
        loader={<Spinner>Loading...</Spinner>}>
        <Grid>
          {movies?.length > 0 && movies.map((movie, index) => (
            <Link key={index} to={`/movies/${movie.id}`}>
              <Image hoverable src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            </Link>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  )
}

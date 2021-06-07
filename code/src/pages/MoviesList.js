import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Grid } from '../styling/Grid'
import { Image } from '../styling/Image'
import { Spinner } from '../styling/Spinner'
import { FlexContainer } from '../styling/FlexContainer'

export const MoviesList = ({ movies, setMovies, storedFilter, storedPage }) => {
  const [maxPages, setMaxPages] = useState(1);
  const { filter } = useParams();

  const fetchMovies = () => {
    const next = storedFilter.current === filter;
    const nextPage = next ? storedPage.current + 1 : 1;
    fetch(`https://api.themoviedb.org/3/movie/${filter || 'popular'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${nextPage}`)
      .then((res) => {
        if (res.ok) {
          if (next) {
            storedPage.current += 1;
          } else {
            storedPage.current = 1;
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
          setMaxPages(json.total_pages);
          storedFilter.current = filter;
          setMovies(json.results.filter((entry) => {
            return entry.poster_path;
          }))
        }
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (movies.length === 0 || storedFilter.current !== filter) {
      fetchMovies();
    }
  }, [filter])

  return (
    <>
      <FlexContainer>
        <NavLink to="/movie-list/popular">
          Popular
        </NavLink>
        <NavLink to="/movie-list/top_rated">
          Top Rated
        </NavLink>
        <NavLink to="/movie-list/upcoming">
          Upcoming
        </NavLink>
        <NavLink to="/movie-list/now_playing">
          Now Playing
        </NavLink>
      </FlexContainer>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => fetchMovies()}
        hasMore={storedPage !== maxPages}
        scrollThreshold={0.9}
        loader={<Spinner>Loading...</Spinner>}>
        <Grid>
          {movies?.length > 0 && movies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <Image hoverable src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            </Link>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Iframe } from '../styling/Iframe'
import { DuoWrapper } from '../styling/DuoWrapper'
import { Image } from '../styling/Image'
import { Container } from '../styling/Container'
import { FlexContainer } from '../styling/FlexContainer'
import { Icon } from '../styling/Icon'
import { Text } from '../styling/Text'
import { Title } from '../styling/Title'
import { Spinner } from '../styling/Spinner'
import { Grid } from '../styling/Grid'

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos,recommendations`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((json) => {
        json.videos = json.videos.results.filter((movieTrailer) => {
          return movieTrailer.type === 'Trailer' && movieTrailer.site === 'YouTube';
        })
        json.recommendations = json.recommendations.results.filter((recommendation) => {
          return recommendation.poster_path;
        })
        console.log(json)
        setMovie(json)
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false))
  }, [movieId])
  return (
    <div>
      {loading
        ? <Spinner>Loading...</Spinner>
        : (
          <>
            {movie
            && (
              <DuoWrapper>
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                {movie.videos.length > 0
                  ? (
                    <Iframe>
                      <iframe title="Youtube" src={`https://www.youtube.com/embed/${movie.videos[0].key}?modestbranding=1`} frameBorder="0" allowFullScreen />
                    </Iframe>)
                  : (
                    <Image src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
                  )}
              </DuoWrapper>
            )}
            <Container>
              <Title>
                {movie?.title}
              </Title>
              {movie?.genres
              && (
                <FlexContainer>
                  {movie.genres.map((genre) => {
                    return (
                      <Icon key={genre.id}>
                        {genre.name}
                      </Icon>
                    )
                  })}
                </FlexContainer>)}
              <Text>
                {movie?.overview}
              </Text>
            </Container>
            {movie?.recommendations.length > 0
            && (
              <Container>
                <Title>
                  You might also like
                </Title>
                <Grid columns={7}>
                  {movie.recommendations.map((item) => (
                    <Link key={item.id} to={`/movies/${item.id}`}>
                      <Image hoverable src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title} />
                    </Link>
                  ))}
                </Grid>
              </Container>
            )}
          </>
        )}
    </div>
  )
}

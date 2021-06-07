import React, { useRef, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MoviesList } from './pages/MoviesList'
import { MovieDetails } from './pages/MovieDetails'
import { MoviesSearch } from './pages/MoviesSearch'
import { Header } from './components/Header'

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [queriedMovies, setQueriedMovies] = useState([]);
  const storedFilter = useRef('');
  const storedPage = useRef(1);
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Switch>
          <Route path="/movie-list/:filter?" render={() => (<MoviesList movies={movies} setMovies={setMovies} storedFilter={storedFilter} storedPage={storedPage} />)} exact />
          <Route path="/movies/:movieId" component={MovieDetails} exact />
          <Route path="/search/:query?" render={() => (<MoviesSearch movies={queriedMovies} setMovies={setQueriedMovies} />)} exact />
          <Route path="/" exact>
            <Redirect to="/movie-list/popular" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

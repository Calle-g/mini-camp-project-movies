import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import { MoviesList } from './pages/MoviesList'
import { MovieDetails } from './pages/MovieDetails'
import { MoviesSearch } from './pages/MoviesSearch'
import { SearchBar } from './styling/SearchBar'
import { Header } from './styling/Header'
import { Image } from './styling/Image'
import { ReactComponent as SearchIcon } from './assets/SearchIcon.svg'
import logo from './assets/logo.png'

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [queriedMovies, setQueriedMovies] = useState([]);
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header>
          <div>
            <Link to="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <SearchBar>
            <div className="search">
              <input type="text" className="searchTerm" placeholder="Search for a movie..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
              <Link to={`/search/${encodeURIComponent(searchQuery)}`}>
                <SearchIcon />
              </Link>
            </div>
          </SearchBar>
        </Header>
        <Switch>
          <Route path="/movie-list/:filter?" render={() => (<MoviesList movies={movies} setMovies={setMovies} />)} exact />
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

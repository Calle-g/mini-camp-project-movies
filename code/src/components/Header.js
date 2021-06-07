import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { HeaderWrapper } from '../styling/HeaderWrapper'
import { Image } from '../styling/Image'
import logo from '../assets/logo.png'
import { SearchBar } from '../styling/SearchBar'
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg'

export const Header = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search/${encodeURIComponent(searchQuery)}`)
    } else {
      setSearchQuery(event.target.value)
    }
  }

  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <SearchBar>
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Search for a movie..." value={searchQuery} onKeyDown={(event) => handleChange(event)} onChange={(event) => handleChange(event)} />
          <Link to={`/search/${encodeURIComponent(searchQuery)}`}>
            <SearchIcon />
          </Link>
        </div>
      </SearchBar>
    </HeaderWrapper>
  )
}

import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="/react/search.svg" alt = "Search"/>
            <input type = "text"
            placeholder="Search Movies"
            value={searchTerm}
            onChange={(event)=> setSearchTerm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
import React from 'react'
import { Link } from 'react-router-dom'

const SearchLink = ({medida}) => (
    <Link to='/search'>
        <img 
            src="https://i.ibb.co/183N837/search.png" 
            alt="link a search" 
            width={medida}
        />
    </Link>
)

export default SearchLink
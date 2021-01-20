import React from 'react'
import { Link } from 'react-router-dom'

const SearchLink = ({medida}) => (
    <Link to='/search'>
        <img 
            src="https://i.ibb.co/HKZpPN7/denti-home.png" 
            alt="link a search" 
            width={medida}
        />
    </Link>
)

export default SearchLink
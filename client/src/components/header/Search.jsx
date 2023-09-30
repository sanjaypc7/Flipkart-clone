import { Box, InputBase ,styled} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
//input field
const SearchContainer= styled(Box)`
  background:#fff;
  width : 38%;
  border-radius:2px;
  margin-left: 10px;
  display:flex;
`
;
//input space
const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
    
`
;
//search icon
const SearchIconWrapper=styled(Box)`

color:blue;
padding:5px;
display:flex;
`

function Search() {
  return (
    <SearchContainer>
        <InputSearchBase
          placeholder='Search for products'
        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
    </SearchContainer>
   
  )
}

export default Search
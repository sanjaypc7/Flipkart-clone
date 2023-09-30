import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
//to avoid unnessecory div from code ,,fragment is faster than div
//jsx file cant execute 2 parent component so we need to use a extra fragment
//we can also use <> </> instead if fragment
import { Fragment } from 'react'

const Component=styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
function Home() {
  return (
    <>
    <NavBar/>
    <Component> <Banner/> </Component>
    
    </>
   
   
  )
}

export default Home
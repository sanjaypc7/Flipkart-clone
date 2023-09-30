import { Box ,Button, Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import LoginDialog from '../login/LoginDialog';
import { useState,useContext} from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

//portion includes login,become seller,more,cart
const Wrapper=styled(Box)`
 display:flex;
 margin:0 3% 0 auto;
 & > button,& > p, & > div{
   margin-right:40px;
   font-size:16px;
   align-items:center;
 }
 
`
;

//cart portion
const Container=styled(Box)`

display:flex;
`
;

const LoginButton=styled(Button)`
   color:#2874f0;
   background:#ffff;
   text-transform:none;
   padding:5px 40px;
   border-radius:2px;
   box-shadow:none;
   font-weight:600;
   height:32px;

`

function CustomButton() {

  const [open,setOpen]=useState(false);

  const {account}=useContext(DataContext);

  const openDialog=()=>{
    setOpen(true);
  }

  return (
   <Wrapper>
    {
      account? <Profile account={account}/>:
      <LoginButton variant="contained" onClick={()=>openDialog()}>login</LoginButton>

    }
   <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
   <Typography style={{marginTop:3}}>More</Typography>

    < Container>
      <ShoppingCartIcon/>
        <Typography>cart</Typography>
    </ Container>
    <LoginDialog open={open} setOpen={setOpen}/>

   </Wrapper>
  )
}

export default CustomButton
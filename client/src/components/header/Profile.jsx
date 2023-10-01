import {Box, styled,  Typography, Menu,MenuItem} from '@mui/material';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';


const Component=styled(Menu)`
margin-top:5px

`

const Logout=styled(Typography)`
  font-size:14px;
  margin-left:20px;

`

const Profile =({account,setAccount})=>{

     const [open,setOpen]=useState(false);

     const handleClick=(event)=>{
        setOpen(event.currentTarget);  
     }
     const handleClose=()=>{
           setOpen(false); 
     }
      const logoutuser=()=>{
        setAccount('')
      }
    return(
<>
  <Box onClick={handleClick}><Typography style={{marginTop:2,cursor:'pointer'}}>{account}</Typography></Box>
  <Component
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=>{handleClose();logoutuser();}}>
           <LogoutIcon/>
        <Logout>Log out</Logout>
        </MenuItem>
       
      </Component>
</>

    )
}

export default Profile;
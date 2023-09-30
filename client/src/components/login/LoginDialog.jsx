import React from 'react'
import {Box, Dialog, TextField, Typography,Button ,styled} from '@mui/material';
import { useState ,useContext} from 'react';
import { authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
const Component=styled(Box)`
    height:70vh;
    width:90vh;

`
;

const Image=styled(Box)`
     background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
     height:83%;
     width:28%;
     padding:45px 35px;
     &> p , & >h5{
       color:#ffff;
       font-weight:600;
     }

`
;

const Wrapper=styled(Box)`
  display:flex;
  flex-direction:column;
  padding:25px 35px;
  flex:1;
  &>div,&>button,&>p{
    margin-top:20px;
  }
`
;

const LoginButton=styled(Button)`
 text-transform:none;
 background:#fb641b;
 color:#fff;
 height:48px;
 border-radius:2px;
 box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
;
const RequestOtp=styled(Button)`
 text-transform:none;
 background:#fff;
 color:#2874f0;
 height:48px;
 border-radius:2px;
 box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
;

const Text=styled(Typography)`

font-size:12px;
color:#878787;
`
;

const CreateAccount =styled(Typography)`
 font-size:14px;
 text-align:center;
 color:#2874f0;
 font-weight:600;
 cursor:pointer;

`
const accountinitialValues={
  login:{
    view:'login',
    heading:"login",
    subheading:"Get access to your Orders,wishlist and Recommentation"
  },
  signup:{
    view:'signup',
    heading:"Looks like you're new here!",
    subheading:"Sign up with your mobile number to get started"
  }
}

const signupInitialValues={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
} 

function LoginDialog({open,setOpen}) {

const [account,toggleAccount]= useState(accountinitialValues.login)
const [signup,setSignup]=useState(signupInitialValues);
const{setAccount}=useContext(DataContext);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountinitialValues.login)
    }
    const ToggleSignup=()=>{
      toggleAccount(accountinitialValues.signup)
    }
    
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        console.log(signup);
    }
    const signUpuser= async ()=>{
      let response = await authenticateSignup(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.firstname);
    }
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: {maxWidth:'unset'}}}>
      <Component>
        <Box style={{display:'flex',height:'100%'}}>
        <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{marginTop:20}}>{account.subheading}</Typography>
        </Image>
         {
           account.view ==='login'?
         <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile number"/>
            <TextField variant="standard" label="Enter Password"/>
            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccount onClick={()=>ToggleSignup()}>New to Flipkart? Create an account</CreateAccount>
           </Wrapper>
           :
           <Wrapper>
           <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='firstname' label="Enter First name"/>
           <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='lastname' label="Enter lastname"/>
           <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter Username"/>
           <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='email' label="Enter Email"/>
           <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter password"/>
           <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='phone' label="Enter phone no"/>
           <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
           <LoginButton onClick={()=>signUpuser()}>Continue</LoginButton>
          
          </Wrapper>
        }
         </Box> 
      </Component>
    </Dialog>
  )
}

export default LoginDialog
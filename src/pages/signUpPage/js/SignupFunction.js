import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { signUp } from '../../../api/ApiService';
import "../css/SignUpPage.css"

const SignupFunction=()=>{


  
  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    const userName = data.get("userName");
    const phoneNumber = data.get("phoneNumber");

    console.log(userName)
  
    // ApiService의 signin 메서드를 사용 해 로그인.
    signUp({ email: email, password:password, userName:userName, phoneNumber:phoneNumber});
  };


	return(
    <div id='SignUpFunction'>
      <form onSubmit={handleSubmit}>
		<Container component="main" maxWidth="sm">
      <Box
          sx={{
            maxWidth:"385px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: "10px",
            margin: "0 auto"
          }}
      >
		<TextField
        sx={{mb:"24px"}}
        label="이메일" 
        required 
        fullWidth
        name="email"
        autoComplete="name"
        id = "email"
        autoFocus
        />
      <TextField
        sx={{mb:"24px"}}
        label="비밀번호" 
        type="password" 
        id='password'
        required 
        fullWidth
        name="password" 
        autoComplete="current-password"
        />
        <TextField
        sx={{mb:"24px"}}
        label="이름" 
        type="name" 
        id='userName'
        required 
        fullWidth
        name="userName" 
        autoComplete="current-password"
        />
        <TextField
        sx={{mb:"24px"}}
        label="전화번호" 
        type="text" 
        id='phoneNumber'
        required 
        fullWidth
        name="phoneNumber" 
        />
      <Button type="submit" fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"black", height:"48px"}}>
        회원가입 
      </Button>
      </Box>
		</Container>
    </form>
    </div>
	)
}

export default SignupFunction
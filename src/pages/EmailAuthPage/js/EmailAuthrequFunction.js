import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { emailAuth } from '../../../api/ApiService';

const EmailAuthrequFunction=()=>{

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
  
    // ApiService의 signin 메서드를 사용 해 로그인.
    emailAuth({ email: email});
  };
	return(
    <div id="EmailAuthrequFunction">
      <form onSubmit={handleSubmit}>
		<Container component="main" maxWidth="sm">
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
      >
        <Typography component="h1" variant="h6" marginBottom="96px" fontSize="24px">
            한남대학교 학교 이메일 인증을 진행합니다.
        </Typography>
        </Box>
    <Box sx={{
              maxWidth:"385px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: "0 auto"
            }}>
		<TextField 
        id="email"
        sx={{mb:"24px"}}
        label="학교 이메일" 
        required 
        fullWidth
        name="email"
        autoComplete="email"
        variant="standard"
        autoFocus
        />
      
      <Button type="submit" fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"black", height:"48px"}}>
        인증요청 
      </Button>
      </Box>
		</Container>
    </form>
    </div>
	)
}

export default EmailAuthrequFunction;
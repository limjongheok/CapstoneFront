import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Signup=()=>{
	return(
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
        label="이름" 
        required 
        fullWidth
        name="name"
        autoComplete="name"
        autoFocus
        />
      <TextField
        sx={{mb:"24px"}}
        label="비밀번호" 
        type="password" 
        required 
        fullWidth
        name="password" 
        autoComplete="current-password"
        />
        <TextField
        sx={{mb:"24px"}}
        label="비밀번호 재확인" 
        type="password" 
        required 
        fullWidth
        name="password" 
        autoComplete="current-password"
        />
        <TextField
        sx={{mb:"24px"}}
        label="전화번호" 
        type="text" 
        required 
        fullWidth
        name="phone number" 
        />
      <Button type="submit" fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"black", height:"48px"}}>
        회원가입 
      </Button>
      </Box>
		</Container>
	)
}

export default Signup
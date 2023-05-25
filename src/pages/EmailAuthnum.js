import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Emailauthnum=()=>{
	return(
		<Container component="main" maxWidth="sm">
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
        id="standard-email-input"
        sx={{mb:"24px"}}
        label="학교 이메일" 
        required 
        fullWidth
        name="email"
        autoComplete="email"
        variant="standard"
        autoFocus
        />
		<TextField 
        id="standard-email-input"
        sx={{mb:"24px"}}
        label="인증 번호" 
        required 
        fullWidth
        name="number"
        autoComplete="number"
        variant="standard"
        autoFocus
        />
      
      <Button type="submit" fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"black", height:"48px"}}>
        다음
      </Button>
      </Box>
		</Container>
	)
}

export default Emailauthnum
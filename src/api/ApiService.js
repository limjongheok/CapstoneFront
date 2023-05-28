import { responsiveFontSizes } from "@mui/material";
import axios from "axios";

const ACCESS_TOKEN = "ACCESS_TOKEN";

// 로그인 api 
export const signin = (userDTO) => {
    return axios.post("http://59.26.59.60:8080/api/login", userDTO).then((response) => {
      let jwt = response.headers.authorization;
      console.log(jwt)
      if(jwt !== ""){
        localStorage.setItem(ACCESS_TOKEN, jwt);
        window.location.href = "/main";  // 로그인 성공시 main 으로 보내기 
      }
    }).catch(function(err){
      if(err.response.status !== 200){
          alert("해당 계정이 없습니다.")
        window.location.href = "/";
      }
    })
  }

  export const emailAuth = (emailAuthDTO) =>{
    return axios.post("http://59.26.59.60:8080/api/email/send/auth", emailAuthDTO).then((response)=>{
        alert("한남대 메일로 인증메일이 전송 되었습니다.")
        window.location.href= "/email/auth/check";
    }).catch(function(err){
        console.log(err.response)
        if(err.response.status === 400){
            alert("한남대 메일만 가입 가능합니다.")
            window.location.href = "/"
        }
        if(err.response.status === 409){
            alert("이미 존재하는 메일입니다.")
            window.location.href = "/"
        }
    })
  }
  // 인증 코드 체크 
  export const emailAuthCheck = (emailAuthCheckDTO) =>{
    return axios.post("http://59.26.59.60:8080/api/email/send/auth/check", emailAuthCheckDTO).then((response)=>{
        window.location.href= "/signup";
    }).catch(function(err){
        if(err.response.status === 400){
            alert("일치하지 않는 코드 입니다.")
        }
        
    })
  }

  export const signUp = (userJoinDTO) =>{
    return axios.post("http://59.26.59.60:8080/api/join", userJoinDTO).then((response)=>{
        window.location.href ="/"
    }).catch(function(err){
        if(err.response.status === 401){
            alert("해당 메일을 인증 받으 시오")
            window.location.href ="/email/auth";
        }
        if(err.response.status === 400){
            alert("잘못된 입력의 형식입니다. 다시 입력해주세요")
        }
    })
  }
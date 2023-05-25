import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

function Footer() {
    // const [value, setValue] = React.useState('recents');
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation sx={{
        position:"fixed",
        bottom:0,
        left:0, right:0,
        height:"125px",
        borderTop: "1px solid black",
        margin: "0 auto",
        maxWidth:"1024px"
      }} showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          sx={{maxWidth:"256px", minWidth:"256px", borderRight: "1px solid black" }}
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          label="Chatting"
          value="chatting"
          sx={{maxWidth:"256px", minWidth:"256px", borderRight: "1px solid black"}}
          icon={<ForumRoundedIcon />}
        />
        <BottomNavigationAction
          label="List"
          value="list"
          sx={{maxWidth:"256px", minWidth:"256px", borderRight: "1px solid black"}}
          icon={<ListRoundedIcon />}
        />
        <BottomNavigationAction
          label="Mypage"
          value="mypage"
          sx={{maxWidth:"256px", minWidth:"256px"}}
          icon={<AccountCircleRoundedIcon />}
        />
        </BottomNavigation>
    );
  }

export default Footer
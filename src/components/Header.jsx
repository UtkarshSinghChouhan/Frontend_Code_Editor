import React from 'react'
import {AppBar, Toolbar} from "@mui/material"

const Header = () => {

    const logo = 'https://www.svgrepo.com/show/349323/codepen.svg';

  return (
    <AppBar position="static" sx={{background: "#060606", height: "9vh"}}>
      <Toolbar>
        <img src={logo} alt="logo" style={{width: 40}} />
      </Toolbar>
    </AppBar>
  )
}

export default Header 
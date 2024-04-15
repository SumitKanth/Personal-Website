import { AppBar, Avatar, Box, Drawer, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { black, white } from "../constants/color";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";

const Header = ({bgColor}) => {

    const [responsiveNav, setResponsiveNav] = useState(false);

    const responsiveNavbar = () => {
        setResponsiveNav(prev => !prev)
    }

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
            bgcolor: bgColor,
          height: "5rem",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Avatar
            sx={{
              height: "3.5rem",
              width: "6rem",
              cursor: "pointer",
            }}
            src={Logo}
          />

          <Box flexGrow={1} />

          <Stack direction={"row"} spacing={"2.5rem"}
          sx={{
            display: {
                xs: "none",
                md: "flex"
            }
          }}
          >
            <NavBar to="/" name={"Home"}/>
            <NavBar to="/about" name={"About"}/>
            <NavBar to="/contact" name={"Contact"}/>
          </Stack>

          <IconButton
            sx={{
                color: white,
                display: {
                    sm: "block",
                    md: "none"
                }
            }}
            size="large"

            onClick={responsiveNavbar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={responsiveNav} onClose={responsiveNavbar}
        sx={{
            bgcolor: "transparent",
            
        }}
      >
        <Stack direction={"column"} spacing={"2.5rem"}
            
            sx={{
                bgcolor: "#1e222b",
                height: "100vh",
                width: "15rem",
                alignItems: "center",
                padding: "2rem 0"
            }}
            >
                <NavBar to="/" name={"Home"}/>
                <NavBar to="/about" name={"About"}/>
                <NavBar to="/contact" name={"Contact"}/>
            </Stack>
      </Drawer>
    </Box>
  );
};

const NavBar = ({ to = "/", name }) => {
  return (
    <Link to={to}
        style={{
            textDecoration: 'none',
            position: "relative",
        }}

        
    >

      <Typography
      sx={{
        color:white,
        fontSize: "1.2rem",
    }}


      >{name}
      
      </Typography>

     
    </Link>
  );
};

export default Header;

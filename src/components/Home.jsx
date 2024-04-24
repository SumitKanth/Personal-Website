import React from "react";
import Header from "./Header";
import { Box, Button, Stack, Typography } from "@mui/material";
import home_bg from "../assets/home_bg.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { white } from "../constants/color";
import {  useNavigate } from "react-router-dom";
import SumitResume from '../assets/sumit_resume.pdf'

const Home = () => {
    const navigate = useNavigate();
  const [text] = useTypewriter({
    words: ["MERN Developer", "Problem Solver", "Memer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const navigateToAbout = () => {
    navigate('/about')
  }

  const downloadResume = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Sumit Resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${home_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Header bgColor={'transparent'}/>

        <Stack
          sx={{
            height: "calc(100vh - 5rem)",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" color={white} fontSize={"4rem"}>
            I'm a{" "}
          </Typography>
          <Typography
            color={"green"}
            fontWeight={"bold"}
            variant="h1"
            fontSize={"5rem"}
          >
            {text}
            <Cursor cursorStyle="|" />
          </Typography>

          <Stack direction={"row"} padding={"4rem 0"} spacing={"2rem"}>
            <Button variant="outlined" size="large" color="warning"
            onClick={() => downloadResume(SumitResume)}
            >
              My Resume
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="info"
              onClick={navigateToAbout}
            >
              My Skills
            </Button>
          </Stack>

        </Stack>

        
      </Box>
    </>
  );
};

export default Home;

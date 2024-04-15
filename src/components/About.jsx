import React, { useEffect, useState } from "react";
import Header from "./Header";
import { black, white } from "../constants/color";
import { Box, Grid, Paper, Stack, Typography, LinearProgress } from "@mui/material";
import { TroubleshootTwoTone } from "@mui/icons-material";
import Projects from "./Projects";

const About = () => {

    const [frontEnd, setFrontEnd] = useState(false);
    const [backEnd, setBackEnd] = useState(false);
    const [tools, setTools] = useState(false);
    const [softSkills, setSoftSkills] = useState(false);

    const frontEndHandler = () => {
        setFrontEnd(true)
        setBackEnd(false)
        setTools(false)
        setSoftSkills(false)
    }

    const backEndHandler = () => {
        setFrontEnd(false)
        setBackEnd(true)
        setTools(false)
        setSoftSkills(false)
    }

    const toolsHandler = () => {
        setFrontEnd(false)
        setBackEnd(false)
        setTools(true)
        setSoftSkills(false)
    }

    const soktSkillsHandler = () => {
        setFrontEnd(false)
        setBackEnd(false)
        setTools(false)
        setSoftSkills(true)
    }
    
    useEffect(() => {
        setFrontEnd(false)
        setBackEnd(true)
        setTools(false)
        setSoftSkills(false)
    }, [])
  return (
    <>
      <Header bgColor={black} />

      <Stack
        alignItems={"center"}
        padding="1rem 0"
        bgcolor={"#191c24"}
        color={white}
      >
        <Typography
            variant="h1"
            fontSize={"1.5rem"}
        >
            My Skills
        </Typography>

        <Stack  
        padding={"4rem 0"}
        >
            <Grid
            container 
            spacing={2}
            >
                <Grid item
                md={3}
                sm={6}
                xs={12}
                textAlign={"center"}
                >

                    <TechBox skill={"FrontEnd"}
                    skillHandler={frontEndHandler}
                    />
                </Grid>
                <Grid item
                md={3}
                sm={6}
                xs={12}
                textAlign={"center"}
                >

                    <TechBox skill={"BackEnd"} skillHandler={backEndHandler}/>
                </Grid>

                <Grid item
                md={3}
                sm={6}
                xs={12}
                textAlign={"center"}
                >

                    <TechBox skill={"Tools"}
                    skillHandler={toolsHandler}
                    />
                </Grid>

                <Grid item
                md={3}
                sm={6}
                xs={12}
                textAlign={"center"}
                >

                    <TechBox skill={"Soft_Skills"}
                    skillHandler={soktSkillsHandler}
                    />
                </Grid>
            </Grid>

            <Stack
            padding={"1rem 2rem"}
            >
                {
                    frontEnd && <SkillProgress 
                    TechName={"Front End"}
                    skillOne={"HTML5"} skillTwo={"CSS (Tailwind, Bootstrap)"}
                    skillThree={"JavaScript"} skillFour={"React JS"}
                    />
                }
                {
                    backEnd && <SkillProgress 
                    TechName={"Back End"}
                    skillOne={"Node JS"} skillTwo={"Mongo DB"}
                    skillThree={"Express"} skillFour={"API"}
                    />
                }

                {
                    tools && <SkillProgress TechName={"Tools"} skillOne={"Git & GitHub"} skillTwo={"Visual Studio Code"}
                    skillThree={"Chakra UI"} skillFour={"Material UI"}
                    />
                }

                {
                    softSkills && <SkillProgress 
                    TechName={"Soft Skills"}
                    skillOne={"Problem Solving"} skillTwo={"Collaboration"}
                    skillThree={"Quick learner"} skillFour={"Joker"}
                    />
                }
            </Stack>
        </Stack>
      </Stack>

      <Projects />
    </>
  );
};

const TechBox = ({skillHandler, skill}) => (
    <Stack
    padding=".5rem 2rem"
    >
        <Paper
    sx={{
        bgcolor: "#2a3248",
        padding: "2rem 4rem",
        cursor: "pointer",
        fontSize: "1.2rem",
        color: white,
        "&:hover":{
            backgroundImage: "linear-gradient(rgb(75 75 75), rgb(30 28 28))"

        }
    }}

    onClick={skillHandler}
    >
        {skill}
    </Paper>
    </Stack>
)

const SkillProgress = ({TechName, skillOne, skillTwo, skillThree, skillFour}) => (
    <Box>
        <Stack
            padding={"1rem 0"}
        >

            <Typography>
                {TechName}
            </Typography>

           
            <ProgressBar techName={skillOne} techPer={'85%'} techPerVal={80}/>
            <ProgressBar techName={skillTwo} techPer={'75%'} techPerVal={75}/>
            <ProgressBar techName={skillThree} techPer={'55%'} techPerVal={55}/>
            <ProgressBar techName={skillFour} techPer={'68%'} techPerVal={68}/>
        </Stack>
    </Box>
)

const ProgressBar = ({techName, techPer, techPerVal}) => (
    <Paper
    sx={{
        padding:"1rem 0",
        bgcolor: "#191c24"
    }}
    >
        <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            padding=".5rem 0"
        >
            <Typography
            color={white}
            >{techName}</Typography>
            <Typography
            color={'#808080'}
            >{techPer}</Typography>
        </Stack>

    <LinearProgress variant="determinate" value={techPerVal}/>
    </Paper>
)

export default About;

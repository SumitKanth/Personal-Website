import { Button, Link, Stack, Typography } from '@mui/material';
import '../css/project.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { white } from '../constants/color';


const Projects = () => {

  return (
   
        <Stack
        sx={{
            bgcolor: "#191c24",
            color: white,
            height: {
                md: "35rem",
                lg: "33rem",
                xl: "26rem"
            }
        }}
        spacing={"2rem"}
        textAlign={"center"}
        >
            <Typography
            variant="h1"
            fontSize={"1.5rem"}
            >Projects</Typography>
        
         <Stack
         direction={{
             sx: "row",
             md: "row"
         }}

         textAlign={"center"}
         justifyContent={"center"}
         spacing={"3rem"}
         alignItems={"center"}
         >
        <ProjectList ProjectName={"PetPuja"} ProjectDescription={"This is a Food Devlivery Website"}
        websiteLink={'http://petpuja.onrender.com/'}
        />
        <ProjectList ProjectName={"KuchBaate"} ProjectDescription={"This is a Chatting App"}
        websiteLink={'https://kuchbaate.onrender.com/'}
        />
        <ProjectList ProjectName={"Weather App"} ProjectDescription={"This is Weather App"}
        websiteLink={'http://weatherapp-9y12.onrender.com/'}
        />
    </Stack>
    </Stack>
  );
};

const ProjectList = ({ProjectName, ProjectDescription, websiteLink}) => (

    <div className="card">
      <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>

      <h1>{ProjectName}</h1>
      <p>
        {ProjectDescription}
      </p>

      <Button variant='outlined' sx={{
        margin: "2rem 0"
      }}
      color='secondary'
      ><Link
      sx={{
        textDecoration: "none",
        color: "#808080"
      }}
      href={websiteLink}
      target="_blank"
      >Go To Website</Link></Button>
    </div>
)

export default Projects;

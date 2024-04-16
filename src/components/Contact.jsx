import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { black, white } from "../constants/color";
import Header from "./Header";
import emailjs from '@emailjs/browser'
import toast, {Toaster} from "react-hot-toast";
import { useState } from "react";


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();

    if(!(name && email && message)){
        toast.error('All Field Required');
        return ;
    }

    if(!email.endsWith("@gmail.com")){
        toast.error('Email must be valid')
        return ;
    }

    const serviceId = import.meta.env.VITE_ServiceId;
    const templateId = import.meta.env.VITE_TemplateId;
    const publicKey = import.meta.env.VITE_PublicKey;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sumit",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        toast.success('Email sent successfully 😊');
        console.log('Email Sent Successfully: ', response)
        setName('');
        setEmail('');
        setMessage('');
        
    })
    .catch((err) => console.log("Email not sent: ", err))
  };

  return (
    <>
    
      <Header bgColor={black} />
      <Toaster />
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        height={{
          md: "calc(100vh - 5rem)",
          xs: "calc(100vh - 2rem)",
        }}
        sx={{
          backgroundColor: "#060928",
        }}
      >
        <Box
          sx={{
            padding: "4rem",
            backgroundColor: "#060927",
            boxShadow:
              "0 20px 40px rgba(0, 0, 0, 0.493), 0 15px 15px rgba(0, 0, 0, 0.445)",
          }}
        >
          <Stack
            spacing="3rem"
            sx={{
              color: white,
            }}
          >
            <Typography variant="h1" fontSize={"1.2rem"} color={"#f6692a"} position={'relative'}>
              Contact Us
                <Typography width={'2.5rem'} color={"#f6692a"} border={'1px solid red'} borderRadius={'50px'}/>
            </Typography>

            <form onSubmit={submitHandler}>
              <Stack
                direction={{
                  sm: "column",
                  md: "row",
                }}
                spacing={{
                  xs: "4rem",
                  sm: "3rem",
                }}
              >
                <TextField
                  id="name"
                  label="name"
                  variant="standard"
                  sx={{ input: { color: "#fff" } }}
                  InputLabelProps={{
                    style: { color: "#808080" },
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="email"
                  label="email"
                  variant="standard"
                  sx={{ input: { color: "#fff" } }}
                  InputLabelProps={{
                    style: { color: "#808080" },
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  sx={{ input: { color: "#fff" } }}
                  InputLabelProps={{
                    style: { color: "#808080" },
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Stack>
              <Button size="large" variant="outlined" type="submit" sx={{
                margin: "1rem 0"
              }}>
                Send Me
              </Button>
            </form>
          </Stack>
        </Box>
      </Stack>
      
    </>
  );
};

export default Contact;

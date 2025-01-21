import {
    Box,
    Container,
    Grid,
    Button,
    Link,
    Stack,
    Typography,
  } from "@mui/material";
  import logo from "../../assets/logo.png";
  import fb from "../../assets/fb.png";
  import pinterest from "../../assets/pinterest.png";
  import twitter from "../../assets/twitter.png";
  import youtube from "../../assets/youtube.png";
  import FooterText from "./FooterText";
  import React from 'react'
  
function Footer() {
    return (
      <Box bgcolor="#1B3C74" pb={3} pt={6}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4.5}>
              <Stack
                alignItems="flex-start"
                justifyContent="space-between"
                height={1}
              >
                <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
                <Stack direction="row" spacing={1.5}>
                  <Box component="img" src={fb} height={36} />
                  <Box component="img" src={twitter} height={36} />
                  <Box component="img" src={youtube} height={36} />
                  <Box component="img" src={pinterest} height={36} />
                </Stack>
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterText>About Us</FooterText>
                <FooterText>Our Pricing</FooterText>
                <FooterText>Our Gallery</FooterText>
                <FooterText>Appointment</FooterText>
                <FooterText>Privacy Policy</FooterText>
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterText>Orthology</FooterText>
                <FooterText>Neurology</FooterText>
                <FooterText>Dental Care</FooterText>
                <FooterText>Opthalmology</FooterText>
                <FooterText>Cardiology</FooterText>
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterText>About Us</FooterText>
                <FooterText>Our Pricing</FooterText>
                <FooterText>Our Gallery</FooterText>
                <FooterText>Appointment</FooterText>
                <FooterText>Privacy Policy</FooterText>
              </Stack>
            </Grid>
          </Grid>
  
          <Typography
            fontWeight={300}
            color="#fff"
            fontSize={14}
            pt={3}
            mt={5}
            borderTop="1px solid rgba(255,255,255,0.1)"
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Container>
      </Box>
    );
  }
  export default Footer;
  
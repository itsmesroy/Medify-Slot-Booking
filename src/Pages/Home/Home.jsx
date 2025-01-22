import React ,{useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar.jsx"
import "./Home.css"
import {Box, Container, Stack} from "@mui/material"
import Heroslider from "../Heroslider/Heroslider.jsx"
import SearchHospital from "../SearchHospital/SearchHospital.jsx";
import HeroLayout from "../HeroLayout/HeroLayout.jsx"

function Home(){
    return(
        <Box>
            <Box sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}>
                <Navbar/> 
                <Container maxWidth="xl">
                <Heroslider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroLayout/>
          </Stack>
                </Container>
            </Box>
        </Box>
    )
}export default Home;
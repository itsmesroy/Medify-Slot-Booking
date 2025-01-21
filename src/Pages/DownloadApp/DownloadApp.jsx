import React from 'react'
import mobile from '../../assets/mobile.jpg'
import arrow from '../../assets/arrow_down.png'
import apple from '../../assets/logo_apple.png'
import playstore from '../../assets/logo_playstore.png'
import {Container, Grid, Typography, Box, Button, Stack} from '@mui/material'
import Phone from './Phone.jsx'


function DownloadApp() {
 
  return(
  <Box sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}>
  <Container>
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={5.5}>
        <Box src={mobile} component="img" width={1} height="auto" />
      </Grid>

      <Grid item xs={12} md={6.5}>
        <Box
          position="relative"
          pl={{ xs: "36px", md: "50px" }}
          mb={{ xs: 4, md: 0 }}
        >
          <Typography variant="h2" mb={2}>
            Download the
            <br />
            <Box component="span" color="primary.main">
              Medify{" "}
            </Box>
            App
          </Typography>

          <Box
            src={arrow}
            component="img"
            width={{ xs: 24, md: 40 }}
            position="absolute"
            left={0}
            top={50}
          />

          <Phone/>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 2 }}
            alignItems="center"
          >
            <Button
              sx={{
                bgcolor: "#333",
                color: "#fff",
                py: 1.5,
                borderRadius: 1.5,
              }}
              size={"large"}
              startIcon={<img src={playstore} height={24} alt="playStore"/>}
              variant="contained"
              disableElevation
            >
              Google Play
            </Button>
            <Button
              sx={{
                bgcolor: "#333",
                color: "#fff",
                py: 1.5,
                borderRadius: 1.5,
              }}
              size="large"
              startIcon={<img src={apple} height={24}  alt="appleStore"/>}
              variant="contained"
              disableElevation
            >
              App Store
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>
  )
}




export default DownloadApp;

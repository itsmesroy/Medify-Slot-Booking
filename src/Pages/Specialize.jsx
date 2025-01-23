import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Card from "./Card/Card";
import Drugstore from "../assets/Drugstore.png";
import Stethoscope from "../assets/stethoscope.png";
import Cardiology from "../assets/cardiology.png";
import Mri from "../assets/mri.png";
import Testube from "../assets/testube.png";
import Safety from "../assets/safety.png";
import Xray from "../assets/xray.png";

function Specialize() {
  const data = [
    { icon: Drugstore, title: "Dentistry" },
    { icon: Stethoscope, title: "Primary Care" },
    { icon: Cardiology, title: "Cardiology" },
    { icon: Mri, title: "MRI Resonance" },
    { icon: Testube, title: "Blood Test" },
    { icon: Safety, title: "Piscologist" },
    { icon: Drugstore, title: "Laboratory" },
    { icon: Xray, title: "X-Ray" },
  ];

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by specialisation
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          {data.map((item) => (
            <Grid item xs={4} md={3} key={item.title}>
              <Card
                img={item.icon}
                title={item.title}
                bgColor={"#FFFFFF"}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
}
export default Specialize;

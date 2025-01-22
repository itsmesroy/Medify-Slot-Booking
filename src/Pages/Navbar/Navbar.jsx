import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Link,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.css"
function Navbar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box p={1} bgcolor="primary.main">
      <Typography fontSize={14} textAlign="center" color="#fff">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/">
            <img src={logo} alt="logo" height={27} />
          </Link>
        </Stack>
        
        <Stack  direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={[styles.navlinks, menuOpen && styles.active]}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}>
          <Link>Find Doctors</Link>
          <Link to="/search">Hospitals</Link>
          <Link>Medicines</Link>
          <Link>Surgeries</Link>
          <Link>Software for Provider</Link>
          <Link>Facilities</Link>
          <Link to="/my-bookings">
            <Button variant="contained" disableElevation>
              My Bookings
            </Button>
          </Link>
          {isMobile && (
            <IconButton
              onClick={() => setMenuOpen(false)}
              sx={{
                position: "absolute",
                top: 0,
                right: 32,
                color: "#fff",
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Stack>

        {isMobile && (
          <IconButton onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Container>
    </Box>
  );
}
export default Navbar;

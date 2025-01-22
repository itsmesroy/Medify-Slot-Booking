import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.css"
function Navbar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
    <Box>
      <Typography className="navbar" fontSize={14} textAlign="center" color="#fff">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
      </Box>
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

          {/* for close button */}
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

    {/* for Menu icon */}
        {isMobile && (
          <IconButton onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
        </Stack>
      </Container>
   
    </header>
  );
}
export default Navbar;

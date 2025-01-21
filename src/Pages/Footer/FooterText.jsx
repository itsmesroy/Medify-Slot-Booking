import {Link,Stack} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react"

function FooterText({ children }) {
    return (
      <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>
        <Stack direction='row' gap={0.5}>
        {/* <KeyboardArrowRightIcon /> */}
          {children}
        </Stack>
      </Link>
    );
  }
  export default FooterText;
import {Box, Typography, TextField, Button, InputAdornment} from "@mui/material"
import React from 'react'
function Phone(){
    return(
        <Box mb={5}>
            <Typography fontWeight={600} mb={1}>
                Get the Link to download the App
            </Typography>

        <Box 
            component="form"
            sx={{
             display: "flex",
             gap: 2,
              flexDirection: { xs: "column", md: "row" },
        }}
        >
            <TextField
            placeholder="Enter Phone Number"
            sx={{
                border: "1px solid #F0F0F0",
                flex: 1,
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        +91
                    </InputAdornment>
                ),
            }}
            required
            />
            <Button type="submit" size="large" variant="contained" disableElevation>
            Send
            </Button>
                
            </Box>   
        </Box>
    )
} export default Phone;
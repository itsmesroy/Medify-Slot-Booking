import React  from "react"
import faq_banner from "../assets/faq_banner.jpg"
import {Box, Grid, Container, Typography} from "@mui/material"
import FaqAccordian from "./FaqAccordian"

function FAQs(){
    const faq= [
        {
            question: "Why choose our medical for your family?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          },
          {
            question: "Why we are different from others?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          },
          {
            question: "Trusted & experience senior care & love",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          },
          {
            question: "How to get appointment for emergency cases?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          },
    ]
    return(
        <div>
            <Box py={5}>
                <Container maxWidth="xl">
                <Typography color="primary.main" fontWeight={600} textAlign="center">
                    Get Your Answer
                </Typography>
                <Typography textAlign="center" variant="h2" mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={faq_banner} width={1} height="auto"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <FaqAccordian data={faq}/>
                        </Box>
                    </Grid>
                </Grid>

                </Container>
            </Box>
        </div>
    )
}
export default FAQs;
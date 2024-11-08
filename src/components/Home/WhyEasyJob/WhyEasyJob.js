import React, { useState } from "react";
import { Button, IconButton, Box, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";

const WhyEasyJob = () => {
  const carouselData = [
    {
      title: "No upfront fees!",
      number: "1",
      icon: "💰",
    },
    {
      title: "Mentors who are pro coders!",
      number: "2",
      icon: "🏅",
    },
    {
      title: "Live sessions. Multiple projects.",
      number: "3",
      icon: "📹",
    },
    {
      title: "Unlimited mock interviews!",
      number: "4",
      icon: "🎥",
    },
    {
      title: "Personalized job assistance!",
      number: "5",
      icon: "🧑‍💼",
    },
  ];

  // Button styles
  const buttonStyle = {
    backgroundColor: "#58a8dd",
    
    color: "#fff",
    "&:hover": {
      backgroundColor: "#000",
    },
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "90%",
        margin: "0 auto",
        padding: "20px",
        alignContent: "left",
      }}
    >
      <Typography variant="h4">LET'S TALK WITH FACTS</Typography>
      <Typography variant="h5" color="primary">
        WHY EasyJob IS 5X BETTER?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        You can search as much as you want.
        <br />
        This is the most Transparent, Pocket friendly and Impactful place to
        learn.
      </Typography>

      <Carousel
        next={(next, active) => (
          <IconButton sx={buttonStyle} aria-label="Next">
            <ArrowForwardIos color="#58a8dd" />
          </IconButton>
        )}
        prev={(prev, active) => (
          <IconButton sx={buttonStyle} aria-label="Previous">
            <ArrowBackIos color="#58a8dd" />
          </IconButton>
        )}
        indicators={true}
        animation="slide"
        duration={700}
        interval={3000}
        autoPlay={true}
        slidesToShow={4}
        SlideToScroll={1 }
        stopAutoPlayOnHover={true}
        navButtonsAlwaysVisible
        fullHeightHover={false}
        // onChange={(index) => console.log("Slide changed to:", index)}
      >
        {carouselData.map((item, index) => (
          <Box
            key={index}
            className="carousel-item"
            sx={{
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="h3">{item.number}</Typography>
            <Typography variant="h2" sx={{ marginTop: "10px" }}>
              {item.icon}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default WhyEasyJob;

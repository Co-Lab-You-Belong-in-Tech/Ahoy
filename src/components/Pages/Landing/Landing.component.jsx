import React from "react";
import { Typography, Stack, Link, Box, Grid } from "@mui/material";
import appStore from "../../../assets/app-store-white.svg";
import googleStore from "../../../assets/google-play-white.svg";
import landingPhoto from "../../../assets/landing-photo.jpg";
import "./Landing.styles.css";

export const Landing = () => {
  return (
    <main>
      <Box
        sx={{
          background:
            "linearGradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        }}
      >
        <Box sx={{ postion: "relative" }}>
          <Box className="img-container">
            <img
              src={landingPhoto}
              alt=""
              sx={{
                height: "auto",
                width: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              position: "absolute",
              top: "40%",
              paddingLeft: "4rem",
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: 700 }}>
              Spark
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              It’s time for you to meet new people.
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs="10" sm="6" md="6">
            <Typography variant="h3" sx={{ color: "white", fontWeight: 700 }}>
              A platform for matching and meeting new friends.
            </Typography>
          </Grid>
          <Grid item xs="10" sm="6" md="6">
            <Typography
              variant="subtitle1"
              sx={{ color: "white", marginBottom: 2 }}
            >
              Spark is the best and newest way to meet and make new friends.
              Match with up a person based on shared interests, chat with
              like-minded individuals, and discover the latest gatherings in
              your area. Download the Spark app today.
            </Typography>

            <Link
              href="https://www.apple.com/store"
              target="_blank"
              rel="noopener"
              marginRight={2}
              className="download-link"
            >
              <img src={appStore} alt="" className="button-image" />
            </Link>
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener"
              className="download-link"
            >
              <img src={googleStore} alt="" className="button-image" />
            </Link>
          </Grid>
        </Grid>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ color: "white" }}
        >
          <Typography variant="h3" sx={{ fontWeight: 900, marginBottom: 8 }}>
            How Spark works
          </Typography>
          <Grid
            container
            direction="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            md={6}
            xs={10}
          >
            <Grid
              item
              direction="column"
              className="works-detail"
              mb={2}
              textAlign="center"
              md={6}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }} mb={1}>
                Group matching
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#e8e8e8" }}>
                Match with a person at a time based on similar interest
                hashtags, events you are going to, or just random.
              </Typography>
            </Grid>
            <Grid item direction="column" className="works-detail" mb={2}>
              <Typography variant="h5" sx={{ fontWeight: 700 }} mb={1}>
                Real time Chat
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#e8e8e8" }}>
                Chat with your match and choose a location to meet.
              </Typography>
            </Grid>
            <Grid item direction="column" className="works-detail" mb={2}>
              <Typography variant="h5" sx={{ fontWeight: 700 }} mb={1}>
                Discover
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#e8e8e8" }}>
                Discover public events in your area, and other potential
                hashtags that you want to group match with.
              </Typography>
            </Grid>
            <Grid item direction="column" className="works-detail" mb={2}>
              <Typography variant="h5" sx={{ fontWeight: 700 }} mb={1}>
                Profile & Content Visibility
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#e8e8e8" }}>
                Upload your media to different hashtags. You can add photos and
                videos to different hashtags, so only people who share the same
                interests can see it, even your friends!
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </main>
  );
};

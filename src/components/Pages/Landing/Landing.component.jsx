import React from "react";
import { Typography, Stack, Link, Box, Grid } from "@mui/material";
import appStore from "../../../assets/app-store-white.svg";
import googleStore from "../../../assets/google-play-white.svg";
import landingPhoto from "../../../assets/landing-photo.jpg";

export const Landing = () => {
  const boxSX = {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    "&::before": {
      content: '""',
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: "2",
    },
  };
  return (
    <main>
      <Box sx={{ backgroundColor: "#AF125A" }}>
        <Box sx={{ postion: "relative" }}>
          <Box sx={boxSX}>
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
            <Typography variant="h1" sx={{ fontWeight: 800 }}>
              Spark
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              It’s time for you to meet new people.
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          direction="row"
          sx={{ padding: "4rem" }}
          my={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs="12" sm="6" md="6" lg="6" xl="6">
            <Typography variant="h2" sx={{ color: "white" }}>
              Group matching platform for new friends.
            </Typography>
          </Grid>
          <Grid item xs="12" sm="6" md="6" lg="6" xl="6">
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Spark is the Best and newest way to meet and make new friends.
              Match with up a person based on shared interests, chat with
              like-minded individuals, and discover the latest gatherings in
              your area. Download the Spark app today
            </Typography>

            <Link
              href="https://www.apple.com/store"
              target="_blank"
              rel="noopener"
            >
              <img src={appStore} alt="" />
            </Link>
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener"
            >
              <img src={googleStore} alt="" />
            </Link>
          </Grid>
        </Grid>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ color: "white" }}
        >
          <Typography variant="h3" sx={{ fontWeight: 900, marginBottom: 3 }}>
            How Spark works
          </Typography>
          <Grid
            container
            direction="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "50%", textAlign: "center" }}
          >
            <Grid
              item
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={5}
              sx={{
                border: 1,
                borderRadius: 1,
                marginBottom: 1,
                width: "100%",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Group matching
              </Typography>
              <Typography variant="subtitle1">
                Match with a person at a time based on similar interest
                hashtags, events you are going to, or just random.
              </Typography>
            </Grid>
            <Grid
              item
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={5}
              sx={{
                border: 1,
                borderRadius: 1,
                marginBottom: 1,
                width: "100%",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Real time Chat
              </Typography>
              <Typography variant="subtitle1">
                Chat with your match and choose a location to meet.
              </Typography>
            </Grid>
            <Grid
              item
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={5}
              sx={{
                border: 1,
                borderRadius: 1,
                marginBottom: 1,
                width: "100%",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Discover
              </Typography>
              <Typography variant="subtitle1">
                Discover public events in your area, and other potential
                hashtags that you want to group match with.
              </Typography>
            </Grid>
            <Grid
              item
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={5}
              sx={{
                border: 1,
                borderRadius: 1,
                marginBottom: 1,
                width: "100%",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Profile & Content Visibility
              </Typography>
              <Typography variant="subtitle1">
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

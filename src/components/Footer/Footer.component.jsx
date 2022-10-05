import React from "react";
import { Typography, Link, Grid, Box } from "@mui/material";

import appStore from "../../assets/app-store-white.svg";
import googleStore from "../../assets/google-play-white.svg";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#AF125A", color: "white" }}>
      <Grid
        container
        direction="row"
        sx={{ padding: "4rem 4rem 2rem 4rem" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            SPARK
          </Typography>
          <Typography variant="subtitle2">Patnership</Typography>
          <Typography variant="subtitle2">Ambassador</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            RESOURCES
          </Typography>
          <Typography variant="subtitle2">Patnership</Typography>
          <Typography variant="subtitle2">Ambassador</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            SOCIAL
          </Typography>
          <Typography variant="subtitle2">Patnership</Typography>
          <Typography variant="subtitle2">Ambassador</Typography>
        </Grid>
        <Grid item direction="column">
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            APP DOWNLOAD
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
    </Box>
  );
};

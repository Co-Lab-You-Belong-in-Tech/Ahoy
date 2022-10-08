import React from "react";
import { Typography, Link, Grid, Box } from "@mui/material";

import appStore from "../../assets/app-store-white.svg";
import googleStore from "../../assets/google-play-white.svg";

export const Footer = () => {
  return (
    <Box sx={{ color: "white" }}>
      <Grid
        container
        direction="row"
        p={8}
        display="flex"
        justifyContent="space-between"
        textAlign="center"
      >
        <Grid item xs="12" sm="6" md="3">
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
            SPARK
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
            Patnership
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
            Ambassador
          </Typography>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
            RESOURCES
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
            Patnership
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
            Ambassador
          </Typography>
        </Grid>
        <Grid item xs="12" sm="6" md="3">
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
            SOCIAL
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
            Patnership
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
            Ambassador
          </Typography>
        </Grid>
        <Grid item direction="column" xs="12" sm="6" md="3">
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
            APP DOWNLOAD
          </Typography>
          <Link
            href="https://www.apple.com/store"
            target="_blank"
            rel="noopener"
            sx={{ display: "block", marginBottom: 1 }}
          >
            <img src={appStore} alt="" className="button-image" />
          </Link>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener"
          >
            <img src={googleStore} alt="" className="button-image" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocationInformation = (props) => {
  const { data } = props;
  const { location, twitter_username, blog, company } = data;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "15px",
      }}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Typography>
            {twitter_username !== null ? (
              <Typography>{twitter_username}</Typography>
            ) : (
              <Typography>Not Available</Typography>
            )}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          <Typography>
            {blog? (
              <a target="_blank" href={blog}><Typography>{blog}</Typography></a>
            ) : (
              <Typography>Not Available</Typography>
            )}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>
            {company !== null ? (
              <Typography>{company}</Typography>
            ) : (
              <Typography>Not Available</Typography>
            )}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;

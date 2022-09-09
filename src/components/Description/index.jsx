import { Typography, Stack } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../PaperInformation/index";
import LocationInformation from "../LocationInformation";

const Description = (props) => {
  const { data } = props;
  const { bio } = data;
  return (
    <Fragment>
      <Stack sx={{
        justifyContent: 'center'
      }}>
        <Typography>
          {bio !== null ? (
            <Typography variant="body1">{bio}</Typography>
          ) : (
            <Typography variant="body1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              voluptatem iste ut dicta voluptate vero, qui ab dolor quos
              deleniti sed minus explicabo quidem adipisci aspernatur alias quas
              molestiae! Sit.
            </Typography>
          )}
        </Typography>
      </Stack>
      <PaperInformation data={data}/>
        <LocationInformation data={data}/>
    </Fragment>
  );
};

export default Description;

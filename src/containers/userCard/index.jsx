import React from "react";
import { Grid, Avatar, Stack } from "@mui/material";
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "../../components/Description";

const UserCard = (props) => {
  const { data } = props;
  const { avatar_url, login } = data;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "15px",
      }}
    >
      <Grid item xs={3}>
        <Avatar
          alt={login}
          src={avatar_url}
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack 
        direction= 'column'
        spacing={1}
        sx={{
            margin: '30px'
        }}
        >
          <PrincipalInformation data={data} />
          <Description data={data} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;

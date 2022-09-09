import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

import Searcher from "./components/Searcher/Searcher";
import UserCard from "./containers/userCard";
import { getGithubUser } from "./services/users";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [data, setData] = useState([]);
  const [errorUserNotFound, setErrorUserNotFound] = useState(false);

  const searchUser = async (user) => {
      const userResponse = await getGithubUser(user);

      if (inputUser === "octocat") {
        localStorage.setItem("octocat", JSON.stringify(userResponse));
        setData(inputUser);
      }
      if (userResponse.message === "Not Found") {
        setErrorUserNotFound(true);
        const octocat = JSON.parse(localStorage.getItem("octocat"));
        setData(octocat);
      }else{
          setData(userResponse);
          setErrorUserNotFound(false);
      }
  };
  useEffect(() => {
    searchUser(inputUser);
  }, [inputUser]);
  return (
    <Container
      sx={{
        bgcolor: "rgba( 255, 255, 255, 0.25 )",
        backdropFilter: "blur( 4px )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        width: "80%",
        height: "90vh",
        borderRadius: "10px",
        margin: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher
        setInputUser={setInputUser}
      />
      {errorUserNotFound ? (
        <Typography sx={{marginTop: "40px", color: "red"}}>User Not Found</Typography>
      ) : (
        <UserCard data={data} />
      )}
    </Container>
  );
};

export default App;

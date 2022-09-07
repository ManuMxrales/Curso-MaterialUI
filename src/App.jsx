import React from "react";
import { Container } from '@mui/material';

import Searcher from "./components/Searcher/Searcher";

const App = () => {
    return(
            <Container sx={{
            bgcolor: 'rgba( 255, 255, 255, 0.25 )',
            backdropFilter: 'blur( 4px )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
            width: '80%',
            height: '90vh',
            borderRadius: '10px',
            margin: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
               <Searcher></Searcher>
            </Container>
        
    )
};

export default App;
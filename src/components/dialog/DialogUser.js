import { Dialog } from '@mui/material';
import { Button, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import Stack from '@mui/material/Stack';

export default function DialogUser(props) {

    const handleSubmit = () => {
    };

    const StyledTextField = styled(TextField)(({theme}) => ( {
        margin: "1rem",
        width: "300px"
    }));

    
    return (
        <Dialog open={props.open} onClose={props.handleDialog}>
            <form
        onSubmit={handleSubmit}
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem"
        }}
        >
            <StyledTextField label="Name" variant="filled" required />
            <StyledTextField label="Direccion" variant="filled" required />
            <StyledTextField label="NIT" variant="filled" required />
            <StyledTextField label="Telefono" variant="filled" required />
            <StyledTextField label="Pais" variant="filled" required />

            <Stack direction="row">
                <Button variant="contained" color="error" sx={{margin: "2rem", mx: 1, px:3}} onClick={props.handleDialog}>Cancel</Button>
                <Button onClick={props.handleDialog} variant="contained" color="primary" type="submit" sx={{margin: "2rem", px:4}}>
                    Save</Button>
            </Stack>
        </form>
        </Dialog>
      
    );
  }
import { Dialog, Stack } from '@mui/material';
import { Button, TextField, styled } from "@mui/material";
import React, { useState } from "react";

export default function DialogInventory(props) {
    
    const handleSubmit = () => {
    };

    const StyledTextField = styled(TextField)(({theme}) => ( {
        margin: "1rem",
        width: "300px"
    }));

    
    return (
        <Dialog open={props.opent} onClose={props.handleDialogIvent}>
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
            <StyledTextField label="Date" variant="filled" required />
            <StyledTextField label="Item" variant="filled" required />
            <StyledTextField label="Amount" variant="filled" required />
            <StyledTextField label="Total Price" variant="filled" required />
            <Stack direction="row">
                <Button sx={{margin: "2rem", mx: 1, px:3}} onClick={props.handleDialogIvent} variant="contained" color="error" >Cancel</Button>
                <Button onClick={props.handleDialog} sx={{margin: "2rem", px:4}} variant="contained" color="primary" type="submit" >
                    Save</Button>
            </Stack>
        </form>
        </Dialog>
      
    );
  }
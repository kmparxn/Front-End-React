import { Button, TextField, styled, Dialog } from "@mui/material";

import React, { useState } from "react";

export default function DialogEmail(props) {
    
    const handleSubmit = () => {
    };

    const StyledTextField = styled(TextField)(({theme}) => ( {
        margin: "1rem",
        width: "300px"
    }));
 
    return (
        <Dialog open={props.opente} onClose={props.handleDialogEmail}>
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
            <StyledTextField label="Email" type="email" variant="filled" required />
            <div>
                <Button onClick={props.handleDialogEmail} variant="contained" color="error" sx={{margin: "2rem"}} >Cancel</Button>
                <Button onClick={props.handleDialog} variant="contained" color="primary" type="submit" sx={{margin: "2rem"}}>
                    Save</Button>
            </div>
        </form>
        </Dialog>
      
    );
  }
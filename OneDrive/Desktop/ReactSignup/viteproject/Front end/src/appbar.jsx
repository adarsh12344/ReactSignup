import React from 'react';
import { Typography, Button } from '@mui/material';

function Appbar() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
            overflow: "auto"
        }}>
            <div>
                <Typography variant="h6">Coursera</Typography>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <Button variant={"contained"}
                    onClick={() => {
                        window.location = "/signup";
                    }}
                >Sign Up</Button>
                <Button variant="contained"
                    onClick={() => {
                        window.location = "/signin";
                    }}
                >Sign In</Button>
            </div>
        </div>
    );
}

export default Appbar;

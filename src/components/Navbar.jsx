import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { auth } from "../fireBase/config";

function ResponsiveAppBar({ user }) {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "none",
        boxShadow: "none",
        backgroundColor: fixed ? "#0e0e14de" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <img
              style={{ width: "20vh" }}
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="Neflix Logo"
            />
          </Box>

          <Box
            sx={{
              ml: "auto",
              mr: "10px",
              float: "right",
            }}
          >
            <Tooltip title="Email img">
              <Button
                variant="contained"
                color="error"
                sx={{ p: "5%" }}
                onClick={() => auth.signOut()}
              >
                Log Out
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

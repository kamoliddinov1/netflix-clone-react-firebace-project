import React from "react";
import { signInWithGoogle } from "../fireBase/config";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "200px" }}>
      <img
        style={{ width: "200px" }}
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Logo"
      />
      <br />
      <Button variant="contained" color="secondary" onClick={signInWithGoogle}>
        sign in with Google
      </Button>
    </div>
  );
};

export default Login;

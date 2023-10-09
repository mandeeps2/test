import React, { useEffect } from "react";
import error from "../images/error.jpeg";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Error() {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate("/");
  //   }, []);

  return (
    <div className="errorpage">
      <Button onClick={() => navigate("/")}>Go to home</Button>
      <br />
      <img src={error} alt="Example" />
    </div>
  );
}

import React from "react";
import welcome from "../images/welcome.jpeg";

export default function Welcome() {
  return (
    <div className="welcome">
      <img src={welcome} alt="Example" />
    </div>
  );
}

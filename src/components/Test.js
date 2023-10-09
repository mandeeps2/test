import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
export function Test() {
  const name = "Rahul";
  const date = new Date().toLocaleDateString();

  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  return (
    <>
      <h1>My Name is {name}</h1>
      <p>Today date is = {date}</p>
      <p>Current time is = {time}</p>
      <button onClick={UpdateTime}> Now time</button>
    </>
  );
}
export function User() {
  const { fname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <>
      <div className="center">
        <h1>Hello {fname}</h1>
        <p>My Current location is {location.pathname}</p>
        {location.pathname === "/back" ? (
          <button onClick={() => navigate(-1)}>back</button>
        ) : null}
      </div>
    </>
  );
}
export function Greeting() {
  let curDate = new Date();
  curDate = curDate.getHours();

  let greeting = "";
  const cssStyle = {};
  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Blue";
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </>
  );
}

export const SlotM = (props) => {
  // let x = "A";
  // let y = "A";
  // let z = "b";

  // let x = props.x;
  // let y = props.y;
  // let z = props.z;

  let { x, y, z } = props;
  if (x === y && y === z) {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is Matching,</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is not Matching,</h1>
          <hr />
        </div>
      </>
    );
  }
};

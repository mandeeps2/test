import { useEffect, useState } from "react";
import { Clock } from "react-clock";
import "react-clock/dist/Clock.css";
import Sdata from "./sdata";

// export function Abc() {
//   const [time, setTime] = useState({
//     minutes: new Date().getMinutes(),
//     hours: new Date().getHours(),
//     seconds: new Date().getSeconds(),
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const date = new Date();
//       setTime({
//         minutes: date.getMinutes(),
//         hours: date.getHours(),
//         seconds: date.getSeconds(),
//       });
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <span>{time.hours}:</span>
//       <span>{time.minutes}:</span>
//       <span>{time.seconds}</span>
//       <span>{time.hours >= 12 ? " PM" : " AM"}</span>
//     </div>
//   );
// }
export function Abc() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1 className="time-head">{time}</h1>
    </>
  );
}
export function Myclock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="myclock">
      <Clock value={value} />
    </div>
  );
}
export function Counter() {
  // Using the useState hook to manage the state of the counter
  const [count, setCount] = useState(0);

  // Function to handle the button click and update the count
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDcrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry Zero Limit");
      setCount(0);
    }
  };

  return (
    <>
      <h1> React Counter App </h1> <p> Count: {count} </p>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDcrement}> Dcrement </button>
    </>
  );
}

function add(a, b) {
  let sum = a + b;
  return sum;
}

function sub(a, b) {
  let sub = a - b;
  return sub;
}

function mult(a, b) {
  let mult = a * b;
  return mult;
}

function div(a, b) {
  let div = a / b;
  div = div.toFixed(2);
  return div;
}

export function Calc() {
  return (
    <>
      <ul>
        <li> {add(40, 4)}</li>
        <li>{sub(40, 4)}</li>
        <li>{mult(40, 4)}</li>
        <li> {div(40, 3)}</li>
      </ul>
    </>
  );
}

export function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="cardi">
          <div className="card_info">
            <span style={{ display: "block" }}>{props.img}</span>
            <span className="card_category">{props.title} </span>
            <h3 className="card_title">{props.sname}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Sresult from "./Sresult";

export default function Search() {
  const [img, setImg] = useState("");
  const InputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchmain">
        <input
          type="text"
          placeholder="Search"
          value={img}
          onChange={InputEvent}
        />
        <br />
        {img === "" ? null : <Sresult name={img} />}
      </div>
    </>
  );
}

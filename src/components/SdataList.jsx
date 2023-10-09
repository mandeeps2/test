import React from "react";
import { Card } from "./First";
import Sdata from "./sdata";

export default function SdataList() {
  return (
    <>
      {Sdata.map(function ncard(val) {
        return <Card img={val.img} title={val.title} sname={val.sname} />;
      })}
    </>
  );
}

import React from "react";
import { Child } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={() => console.log("clicked")} />
    </div>
  );
};

export default Parent;

import React, { useContext } from "react";
import { MyContext } from "./../Component1/Component1";

function Component5() {
  const value = useContext(MyContext);
  return (
    <div>
      <h2>Component5</h2>
      <p> {value} </p>
    </div>
  );
}

export default Component5;

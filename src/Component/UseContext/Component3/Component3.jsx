import React, { useContext } from "react";
import { MyContext } from "./../Component1/Component1"; 

function Component3() {
  const value = useContext(MyContext); 

  return (
    <div>
      <h2>Component 3</h2>
      <p>{value}</p>
    </div>
  );
}

export default Component3;

import React, { createContext, useState } from "react";
import Component3 from "../Component3/Component3";
import Component4 from "../Component4/Component4";
import Component5 from "../Component5/Component5";
import Component2 from "../Component2/Component2";

export const MyContext = createContext();
function Component1() {
    const [value, setValue] = useState("this is the value we pass to the component 1");

  return (
    <MyContext.Provider value={value}>
    <div>
      <h2>Component 1</h2>
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
    </div>
  </MyContext.Provider>

  )
}

export default Component1
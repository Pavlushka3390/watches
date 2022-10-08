import React from "react";
import Watch from "./components/Watch/Watch";

import "./App.css";

const watch = [{
  name: "Moscow",
  timezoneOffset: 0
}, {
  name:"London",
  timezoneOffset: +3
}
  
];

function App() {
  return (
    <div className="container">
      <Watch watch={watch} />
    </div>
  );
}

export default App;
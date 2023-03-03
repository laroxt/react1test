import React from "react";
import LoginForm from "./LoginForm";
var userRegistered = false;

function App() {
  return (
    <div className="container">
      <LoginForm isRegistered={userRegistered} />
    </div>
  );
}

export default App;

// import React from "react";

// const currentTime = new Date(2019, 11, 1, 23).getHours();
// console.log("🚀 ~ file: App.js:5 ~ currentTime:", currentTime);

// function App() {
//   return (
//     <div className="container">{currentTime > 12 && <h1>Go to sleep</h1>}</div>
//   );
// }

// export default App;

// import React from "react";

// const currentTime = new Date(2019, 11, 1, 23).getHours();
// console.log("🚀 ~ file: App.js:5 ~ currentTime:", currentTime);

// function App() {
//   return (
//     // <div className="container">{currentTime > 12 && <h1>Go to sleep</h1>}</div>
//     <div className="container">
//       {currentTime > 12 ? <h1>Go to sleep</h1> : null}
//     </div>
//   );
// }

// export default App;

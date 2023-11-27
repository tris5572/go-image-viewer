import { useState } from "react";
import { Image } from "./Image";
import logo from "@/assets/images/logo-universal.png";
// import "./App.css";
// import { Greet } from "@wails/main/App";
// import { Greet } from "../../wailsjs/go/main/App";
import { Println } from "@wails/main/App";

import styled from "styled-components";

const AppWrapper = styled.div`
  color: gray;
  width: 100%;
  height: 100vh;
`;

function App() {
  // const [resultText, setResultText] = useState(
  //   "Please enter your name below 👇"
  // );
  // const [name, setName] = useState("");
  // const updateName = (e: any) => setName(e.target.value);
  // const updateResultText = (result: string) => setResultText(result);

  // console.log("App");
  // Println("App");

  // function greet() {
  //   Greet(name).then(updateResultText);
  // }

  // return (
  //   <div id="App">
  //     <img src={logo} id="logo" alt="logo" />
  //     <div id="result" className="result">
  //       {resultText}
  //     </div>
  //     <div id="input" className="input-box">
  //       <input
  //         id="name"
  //         className="input"
  //         onChange={updateName}
  //         autoComplete="off"
  //         name="input"
  //         type="text"
  //       />
  //       <button className="btn" onClick={greet}>
  //         Greet
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <AppWrapper>
      <Image src={logo} />
    </AppWrapper>
  );
}

export default App;

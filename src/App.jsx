import React from "react";
import { useRef } from "react";
import "./styles.css";


export default function App() {


  const sendReq = e => {
    e.preventDefault();

    console.log(e.target)
  }
 
  return (
    <div >
      <h1>github auth</h1>

      <button onClick={sendReq}>auth github</button>

    </div>
  );
}

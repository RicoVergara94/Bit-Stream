import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div id="login-container">
        <input
          id="input-email"
          type="text"
          placeholder="email or username"
        ></input>
        <input id="input-password" type="text" placeholder="password"></input>
      </div>
    </div>
  );
}

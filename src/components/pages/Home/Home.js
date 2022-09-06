import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div id="body">
      <div id="header">
        <a href="../Live/Live.js">Live</a>
        <a href="./">Inbox</a>
        <a href="./">About us</a>
        <a href="./">Contact us</a>
      </div>
      <div id="page-header"></div>
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

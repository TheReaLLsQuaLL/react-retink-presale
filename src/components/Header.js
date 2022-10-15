import { useState } from "react";
import "./Header.css";
import avatar from "../img/Retink-avatar.svg";
import logo from "../img/Logo.svg";

function Header() {
  return (
    <div class="header">
      <div class="header-left">
        <div class="header-left-logo">
          <img src={logo} alt="logo" />
        </div>
        <div class="header-left-titel">
          <h1>
            Get Advanced AI
            <br />+ ExpertCreated
            <span>Logos</span>
          </h1>
        </div>
        <div class="header-left-desc">
          <p>
            Boost your sales <span> 10x </span>
            faster with content customised by our <br></br>
            unique partnership of{" "}
            <span> human creativity and AI optimization </span>
          </p>
        </div>
        <div className="header-left-sign">
          <div class="header-left-sign-titel">
            <p>Sign Up For The BETA!</p>
          </div>
          <div className="header-left-sign-body">
            <p>
              <input placeholder="Business Name" /> would like a beta invite
              sent to <input placeholder="@email address" /> when it's ready!
            </p>
          </div>
          <div className="header-left-sign-footer">
            <button id="header-left-sign-button-notify">Notify me</button>
            <button id="header-left-sign-button-signup">
              <a href="https://retink.io/fap/">
                Sign up as a freelance partner
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="header-right">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Header;

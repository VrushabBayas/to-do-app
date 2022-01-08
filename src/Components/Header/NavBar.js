import React from "react";
import "./navStyle.css";

export default function NavBar() {
  return (
    <div>
      <nav className="menu-bar">
        <ul>
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
            <div className="sub-menu-1">
              <ul>
                <li>
                  <a href="/">Mission</a>
                </li>
                <li>
                  <a href="/">Vision</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Pricing</a>
            <div className="sub-menu-1">
              <ul>
                <li className="hover-me">
                  <a href="/">Priminum</a>
                  <div className="sub-menu-2">
                    <li>
                      <a href="/">1 screen</a>
                    </li>
                    <li>
                      <a href="/">2 screen</a>
                    </li>
                    <li>
                      <a href="/">3 screen</a>
                    </li>
                  </div>
                </li>
                <li className="hover-me">
                  <a href="/">Vip</a>
                  <div className="sub-menu-2">
                    <li className="hover-me2">
                      <a href="/">1 screen</a>
                      <div className="sub-menu-3">
                        <li>
                          <a href="/">HD</a>
                        </li>
                        <li>
                          <a href="/">Super HD</a>
                        </li>
                        <li>
                          <a href="/">4K</a>
                        </li>
                      </div>
                    </li>
                    <li>
                      <a href="/">2 screen</a>
                    </li>
                    <li>
                      <a href="/">3 screen</a>
                    </li>
                  </div>
                </li>
                <li>
                  <a href="/">Basic</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/">Training</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

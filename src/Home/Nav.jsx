import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>

      <NavLink className="nav-link" to="/PomodoroClock">
        Pomodoro Clock
      </NavLink>

      <NavLink className="nav-link" to="/ColorCycle">
        Color Cycle
      </NavLink>

      <NavLink className="nav-link" to="/JsonCsv">
        Json Csv{" "}
      </NavLink>

      <NavLink className="nav-link" to="/QRCodeBadge">
        QR Code Badge
      </NavLink>

      <NavLink className="nav-link" to="/markdownpreview">
        Markdown Preview
      </NavLink>

      <NavLink className="nav-link" to="/TypingPractice">
        Typing Practice
      </NavLink>

      <NavLink className="nav-link" to="/CalculatorCLI">
        Calculator CLI
      </NavLink>

      <NavLink className="nav-link" to="/GithubTimeline">
        Github Timeline
      </NavLink>

      <NavLink className="nav-link" to="/BooleBot">
        Boole Bot
      </NavLink>

      <NavLink className="nav-link" to="/SpellIt">
        Spell It
      </NavLink>
    </div>
  );
};
export default Nav;

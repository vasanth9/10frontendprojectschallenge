import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Button, Card, Col, Row } from "react-bootstrap";


const Timer = (props) => {
    const {session,shortBreak,longBreak} = props
return (
  <div>
    <h1>{session}</h1>
    <h1>{shortBreak}</h1>
    <h1>{longBreak}</h1>
  </div>
);
};
export default Timer;

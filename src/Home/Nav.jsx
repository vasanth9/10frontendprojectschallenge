import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";

import "./Nav.css";

const Nav = ({ project,setProject }) => {
  const style1="nav-10-link";
  const style2="nav-10-link active";
  return (
    <Row className="nav-bar">
      <Col className={project===0?style2:style1} onClick={()=>setProject(0)} sm={1}>
        10 Projects
      </Col>
      <Col className={project===1?style2:style1} onClick={()=>setProject(1)} sm={1}>
        Pomodoro Clock
      </Col>
      <Col className={project===2?style2:style1} onClick={()=>setProject(2)} sm={1}>Color Cycle</Col>
      <Col className={project===3?style2:style1} onClick={()=>setProject(3)} sm={1}>Json Csv </Col>
      <Col className={project===4?style2:style1} onClick={()=>setProject(4)} sm={1}>QR Code Badge</Col>
      <Col className={project===5?style2:style1} onClick={()=>setProject(5)} sm={1}>Markdown Preview</Col>
      <Col className={project===6?style2:style1} onClick={()=>setProject(6)} sm={1}>Typing Practice</Col>
      <Col className={project===7?style2:style1} onClick={()=>setProject(7)} sm={1}>Calculator CLI</Col>
      <Col className={project===8?style2:style1} onClick={()=>setProject(8)} sm={1}>Github Timeline</Col>
      <Col className={project===9?style2:style1} onClick={()=>setProject(9)} sm={1}>Boole Bot</Col>
      <Col className={project===10?style2:style1} onClick={()=>setProject(10)} sm={1}>Spell It</Col>
    </Row>
  );
};
export default Nav;

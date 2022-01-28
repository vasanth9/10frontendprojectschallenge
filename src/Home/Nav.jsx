import React from "react";
import { Row } from "react-bootstrap";

import "./Nav.css";

const Nav = ({ project,setProject }) => {
  const style1="nav-link";
  const style2="nav-link active";
  return (
    <Row className="nav-bar">
      <span className={project===0?style2:style1} onClick={()=>setProject(0)}>
        10 Projects
      </span>
      <span className={project===1?style2:style1} onClick={()=>setProject(1)}>
        Pomodoro Clock
      </span>
      <span className={project===2?style2:style1} onClick={()=>setProject(2)}>Color Cycle</span>
      <span className={project===3?style2:style1} onClick={()=>setProject(3)}>Json Csv </span>
      <span className={project===4?style2:style1} onClick={()=>setProject(4)}>QR Code Badge</span>
      <span className={project===5?style2:style1} onClick={()=>setProject(5)}>Markdown Preview</span>
      <span className={project===6?style2:style1} onClick={()=>setProject(6)}>Typing Practice</span>
      <span className={project===7?style2:style1} onClick={()=>setProject(7)}>Calculator CLI</span>
      <span className={project===8?style2:style1} onClick={()=>setProject(8)}>Github Timeline</span>
      <span className={project===9?style2:style1} onClick={()=>setProject(9)}>Boole Bot</span>
      <span className={project===10?style2:style1} onClick={()=>setProject(10)}>Spell It</span>
    </Row>
  );
};
export default Nav;

import React, {useState} from "react";
import qrcode from "qrcode-generator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row } from "react-bootstrap";

const QRCodeBadge = () => {
  const [data, setData] = useState({
    Name: "Vasanth Kumar Cheepurupalli",
    Email: "Cheepurupalli.VasanthKumar@gmail.com",
    Twitter: "Vasanth9110",
    Github: "Vasanth9",
  });
  
  const handleClick = () => {
    var typeNumber = 20;
    var errorCorrectionLevel = "L";
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(
      `Name: ${data.Name}\nEmail: ${data.Email}\nTwitter: @${data.Twitter}\nGitHub: ${data.Github}`
    );
    qr.make();
    document.getElementById("placeHolder").innerHTML = qr.createImgTag();
  };
  const handleChange = (field, value) => {
    setData({...data,[field]:value});
  }
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <input sm={5} value={data.Name} onChange={(e)=>handleChange("Name",e.target.value)}/>
          </Col>
          <Col>
            <input value={data.Email} onChange={(e)=>handleChange("Email",e.target.value)}/>
          </Col>
          <Col>
            <input value={data.Twitter} onChange={(e)=>handleChange("Twitter",e.target.value)}/>
          </Col>
          <Col>
            <input value={data.Github} onChange={(e)=>handleChange("Github",e.target.value)}/>
          </Col>
        </Row>
      </Form>
      <button onClick={handleClick}>Create</button>
      <center id="placeHolder" ></center>
    </div>
  );
};

export default QRCodeBadge;

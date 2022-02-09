import React, { useState } from "react";
import qrcode from "qrcode-generator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row } from "react-bootstrap";
import './QRCodeBadge.css';

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
    setData({ ...data, [field]: value });
  };
  const handleCancel = () => {
    setData({
    Name: "",
    Email: "",
    Twitter: "",
    Github: "",
  });
  }
  return (
    <div>
      <Row>
        <Col>Name:</Col>
        <Col>Email:</Col>
        <Col>Twitter:</Col>
        <Col>Github:</Col>
      </Row>
      <Form>
        <Row>
          <Col>
            <input
              className="qrcode-input"
              value={data.Name}
              onChange={(e) => handleChange("Name", e.target.value)}
            />
          </Col>
          <Col>
            <input
              value={data.Email}
              className="qrcode-input"
              onChange={(e) => handleChange("Email", e.target.value)}
            />
          </Col>
          <Col>
            <input
              value={data.Twitter}
              className="qrcode-input"
              onChange={(e) => handleChange("Twitter", e.target.value)}
            />
          </Col>
          <Col>
            <input
              value={data.Github}
              className="qrcode-input"
              onChange={(e) => handleChange("Github", e.target.value)}
            />
          </Col>
        </Row>
      </Form>
      <button onClick={handleClick}>Create</button>
      <button onClick={handleCancel}>Cancel</button>
      <center id="Data"></center>
      <center id="placeHolder"></center>
    </div>
  );
};

export default QRCodeBadge;

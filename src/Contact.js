import React from "react";
import "./Contact.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import peopleImg from "./people.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="Container">
        <div className="card_container">
          <CardGroup className="cardGroup">
            <Card className="card1">
              <div>
                <FaLocationDot />
              </div>
              <div>
                <Card.Body className="cardinfo">
                  <Card.Title>Office Address</Card.Title>
                  <Card.Text>
                    Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO
                    65584-5678.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card className="card2">
              <span>
                <MdOutlineEmail />
              </span>
              <Card.Body>
                <Card.Title>Email Address</Card.Title>
                <Card.Text className="cardtext">abc123@gmail.com </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card3">
              <span>
                <FaPhoneSquareAlt />
              </span>
              <Card.Body>
                <Card.Title>Contact number</Card.Title>
                <Card.Text className="cardtext">+91-8976543218</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="formimgContainer">
          <div className="contactMain">
            <div className="formContainer">
              <span className="heading">
                <h1>Get In Touch With Us</h1>
              </span>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Subject</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
            <div className="imgContainer">
              <img src={peopleImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

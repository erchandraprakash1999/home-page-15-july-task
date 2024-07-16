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


const styles = {
  button: {
    backgroundColor: 'rgb(224, 26, 171)',
    border: "none",
  },
};

function Contact() {
  return (
    <>
      <div className="Container">
        <div className="card_container">
          <CardGroup className="cardGroup">
            <Card className="card1">
              <div className="logoinfo">
                <div className="logocontainer">
                  <FaLocationDot className="logo" />
                </div>
                <div className="cardinfo">
                  <Card.Body >
                    <Card.Title>Office Address</Card.Title>
                    <Card.Text>
                      KEYES HIGH SCHOOL FOR GIRLS <br />
                      St Johns Rd, Regimental Bazaar, <br />
                      Shivaji Nagar, Secunderabad, <br />
                      Telangana, 500003.
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
            <Card className="card2">
              <div className="logoinfo">
                <div className="logocontainer">
                  <MdOutlineEmail className="logo" />
                </div>
                <div className="cardinfo">
                  <Card.Body>
                    <Card.Title>Email Address</Card.Title>
                    <Card.Text className="cardtext">abc123@gmail.com </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
            <Card className="card3">
              <div className="logoinfo">
                <div className="logocontainer">
                  <FaPhoneSquareAlt className="logo" />
                </div>
                <div className="cardinfo">
                  <Card.Body>
                    <Card.Title>Contact number</Card.Title>
                    <Card.Text className="cardtext">+91-8976543218</Card.Text>
                  </Card.Body>
                </div>
              </div>
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
                  <Button variant="primary" size="lg" style={styles.button}>
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

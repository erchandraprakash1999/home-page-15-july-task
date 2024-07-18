import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import "./Contact1.css";
import Peopleimg from "./people.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const styles = {
  button: {
    backgroundColor: "rgb(224, 26, 171)",
    border: "none",
  },
};

function Contact1() {
  return (
    <div
      className="Container1"
      style={{ backgroundColor: "  rgb(222, 222, 222)", height: "auto" }}
    >
      <div className="card_container">
        <Card
          style={{
            width: "20rem",
            marginRight: "2rem",
            marginTop: "2rem",
          }}
        >
          <div className="logoinfo">
            <div className="logocontainer">
              <FaLocationDot className="logo" />
            </div>
            <Card.Body>
              <Card.Title>Office address</Card.Title>
              <Card.Text>
                KEYES HIGH SCHOOL FOR GIRLS Shivaji Nagar, Secunderabad,
                Telangana, 500003.
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{
            width: "20rem",
            marginRight: "2rem",
            marginTop: "2rem",
            height: "11rem",
          }}
        >
          <div className="logoinfo">
            <div className="logocontainer">
              <MdOutlineEmail className="logo" />
            </div>
            <Card.Body>
              <Card.Title>Email Address</Card.Title>
              <Card.Text style={{ color: "rgb(224, 26, 171)" }}>
                abcs123@gmail.com
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{
            width: "20rem",
            marginRight: "2rem",
            marginTop: "2rem",
            height: "11rem",
          }}
        >
          <div className="logoinfo">
            <div className="logocontainer">
              <FaPhoneSquareAlt className="logo" />
            </div>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text style={{ color: "rgb(224, 26, 171)" }}>
                +91-8976354282
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>
      <div>
        <Container className="px-0">
          <Row
            noGutters
            className="pt-2 pt-md-5 w-100 
                        px-4 px-xl-0 position-relative"
          >
            <Col
              xs={{ order: 2 }}
              md={{ size: 4, order: 1 }}
              tag="aside"
              className="pb-3 mb-5 pb-md-0 
                            mb-md-0 mx-auto mx-md-0"
            >
              <div>
                <div
                  className="form_container"
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    height: "auto",
                    padding: "3rem",
                    backgroundColor: "White",
                    marginLeft: "2rem",
                  }}
                >
                  <span className="heading">
                    <h1>Get In Touch With Us</h1>
                  </span>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Subject</Form.Label>
                      <Form.Control placeholder="subject" />
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
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>

            <Col
              xs={{ order: 1 }}
              md={{ size: 7, offset: 1 }}
              tag="section"
              className="py-5 mb-5 py-md-0 mb-md-0"
            >
              <div>
                <Figure>
                  <Figure.Image
                    width={200}
                    height={300}
                    alt="171x180"
                    src={Peopleimg}
                    style={{ width: "auto", borderRadius: "10px" }}
                  />
                </Figure>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact1;

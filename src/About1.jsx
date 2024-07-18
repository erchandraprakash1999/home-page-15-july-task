import React from "react";
import Button from "react-bootstrap/Button";
import { MdPermContactCalendar } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Aboutimg from "./about.png";

const styles = {
  button: {
    backgroundColor: "rgb(224, 26, 171)",
    border: "none",
  },
};

function About1() {
  return (
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
            className="pb-5 mb-5 pb-md-0 
                            mb-md-0 mx-auto mx-md-0"
          >
            <div>
              <Figure>
                <Figure.Image
                  width={200}
                  height={220}
                  alt="200x220"
                  src={Aboutimg}
                  style={{ width: "auto" }}
                />
              </Figure>
            </div>
          </Col>

          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            tag="section"
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            <div>
              <Col md={6}>
                <h2 id="about-us">About Us</h2>
                <p>
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae
                  apitlibero venenatis faucibus. Nullam quis ante, posuere
                  cubilia Curae In ac dui quis mi consectetuer lacinia. Nam
                  pretium turpis et arcu. Duis arcu tortor suscipit eget
                  imperdiet nec imperdiet ialisn ipsum. Sed aliquam ultrices
                  mauris. Integer ante arcu consectetuer, vel
                </p>
              </Col>
              <div
                className="gridItemContainer"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,0.5fr)",
                  gap: "10px",
                }}
              >
                <div className="box1">
                  <div>
                    <MdPermContactCalendar className="logo" />
                  </div>
                  <h5>Contact Genuine Porfiles</h5>
                </div>
                <div className="box2">
                  <div>
                    <LuMessagesSquare className="logo" />
                  </div>
                  <h5>Find Perfect match quite easily</h5>
                </div>
                <div className="box3">
                  <div>
                    <SiHomeassistantcommunitystore className="logo" />
                  </div>
                  <h5>100% Security for data and profile</h5>
                </div>
                <div className="box4">
                  <div>
                    <MdSecurity className="logo" />
                  </div>
                  <h5>Trusted Matrimonal agency in the world</h5>
                </div>
              </div>
              <Button
                variant="primary"
                className="AboutBtn"
                style={styles.button}
              >
                See More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About1;

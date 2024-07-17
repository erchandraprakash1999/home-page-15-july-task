import React from "react";
import "./About.css";
import Aboutimg from "./about.png";
import Button from "react-bootstrap/Button";
import { MdPermContactCalendar } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { Col } from "react-bootstrap";

const styles = {
  button: {
    backgroundColor: "rgb(224, 26, 171)",
    border: "none",
  },
};

function About() {
  return (
    <div className="container">
      <div className="AboutContainer">
        <div className="AboutImgContainer">
          <img src={Aboutimg} alt="about" className="AboutImg" />
        </div>
        <div className="AboutInfo">
          {/* <h1>About Us</h1> */}
          {/* <p>
          Maecenas nec odio et ante tincidunt tempus. Donec vitae apitlibero
          venenatis faucibus. Nullam quis ante, posuere cubilia Curae In ac dui
          quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu
          tortor suscipit eget imperdiet nec imperdiet ialisn ipsum. Sed aliquam
          ultrices mauris. Integer ante arcu consectetuer, vel
        </p> */}
          <Col md={6}>
            <h2 id="about-us">About Us</h2>
            <p>
              Maecenas nec odio et ante tincidunt tempus. Donec vitae apitlibero
              venenatis faucibus. Nullam quis ante, posuere cubilia Curae In ac
              dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis
              arcu tortor suscipit eget imperdiet nec imperdiet ialisn ipsum.
              Sed aliquam ultrices mauris. Integer ante arcu consectetuer, vel
            </p>
          </Col>
          <div className="gridItemContainer">
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
          <Button variant="primary" className="AboutBtn" style={styles.button}>
            See More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "./About.css";
import Aboutimg from "./about.png";
import Button from "react-bootstrap/Button";
import { MdPermContactCalendar } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

function About() {
  return (
    <div className="AboutContainer">
      <div className="AboutImgContainer">
        <img src={Aboutimg} alt="about" className="AboutImg" />
      </div>
      <div className="AboutInfo">
        <h1>About Us</h1>
        <p>
          Maecenas nec odio et ante tincidunt tempus. Donec vitae apitlibero
          venenatis faucibus. Nullam quis ante, posuere cubilia Curae In ac dui
          quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu
          tortor suscipit eget imperdiet nec imperdiet ialisn ipsum. Sed aliquam
          ultrices mauris. Integer ante arcu consectetuer, vel
        </p>
        <div className="gridItemContainer">
          <div className="box1">
            <span>
              <MdPermContactCalendar />
            </span>
            <h5>Contact Genuine Porfiles</h5>
          </div>
          <div className="box2">
            <span>
              <LuMessagesSquare />
            </span>
            <h5>Find Perfect match</h5>
          </div>
          <div className="box3">
            <span>
              <SiHomeassistantcommunitystore />
            </span>
            <h5>100% Security</h5>
          </div>
          <div className="box4">
            <span>
              <MdSecurity />
            </span>
            <h5>Trusted Matrimonal</h5>
          </div>
        </div>
        <Button variant="primary" className="AboutBtn">
          See More
        </Button>
      </div>
    </div>
  );
}

export default About;

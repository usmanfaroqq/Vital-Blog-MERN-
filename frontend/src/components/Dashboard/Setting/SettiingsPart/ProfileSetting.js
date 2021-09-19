import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../SideBar";
import { Helmet } from "react-helmet";

const ProfileSetting = () => {
  return (
    <Container>
      <Helmet>
        <title>Profile - Vital Blog</title>
        <meta name="profile" content="profile" />
      </Helmet>
      <Row>
        <Col md={4}>
          <SideBar />
        </Col>
        <Col md={8}>
          <div className="profile">
            <h1>Profile</h1>
            <div className="profile__name">
              <h3>Name</h3>
              <div className="borderBottom">
                <input
                  type="text"
                  className="profile__name-Input"
                  placeholder="Name"
                />
              </div>
              <p className="profile__name-text">
                {" "}
                Your name appears on your Profile page, as your byline, and in
                your responses. It is a required field.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSetting;

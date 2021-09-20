import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../SideBar";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { updateNameMethod } from "../../../../redux/asyncMethods/ProfileMethods";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { REMOVE_PROFILE_ERRORS } from "../../../../redux/types/ProfileTypes";

const PasswordSetting = () => {
  return (
    <Container>
      <Helmet>
        <title>Profile - Vital Blog</title>
        <meta name="profile" content="profile" />
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            color: "red",
            fontSize: "1.5rem",
          },
        }}
      />
      <Row>
        <Col md={4}>
          <SideBar />
        </Col>
        <Col md={8}>
          <div className="profile">
            <h1>Email/Password</h1>
            <div className="profile__name">
              <h3>Password</h3>
              <div className="borderBottom">
                <form>
                  <input
                    type="text"
                    className="profile__name-Input"
                    placeholder="Password"
                    name="password"
                  />
                  <input
                    type="submit"
                    value="Change password"
                    className="create__post-submitBlogBtn"
                  />
                </form>
              </div>
              {/* <p className="profile__name-text">
                {" "}
                Your name appears on your Profile page, as your byline, and in
                your responses. It is a required field.
              </p> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordSetting;

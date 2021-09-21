import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import HomeAllPosts from "./HomeAllPosts";
import HomeRightBar from "./HomeRightBar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vital Blog</title>
        <meta name="home" content="blogs" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8}>
            <div className="homeLeftBar">
              <HomeAllPosts />
            </div>
          </Col>
          <Col md={4}>
            <div className="homeRightBar">
              <HomeRightBar />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

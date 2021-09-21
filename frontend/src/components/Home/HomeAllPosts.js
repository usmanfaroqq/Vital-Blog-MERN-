import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allHomePosts } from "../../redux/asyncMethods/HomeGetAllPostMethod";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const HomeAllPosts = () => {
  let { page } = useParams();
  if (page === undefined) {
    page = 1;
  }
  const { loading } = useSelector((state) => state.PostReducer);
  const { posts, count, perPage } = useSelector((state) => state.FetchPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allHomePosts(page));
  }, []);
  console.log("page", page);
  console.log("posts", posts);
  console.log("count", count);
  console.log("perPage", perPage);
  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col md={4}>
              <div>
                <Card.Img variant="top" src="holder.js/100px180" />
              </div>
            </Col>
            <Col md={8}>
              <div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomeAllPosts;

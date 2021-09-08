import React from "react";
import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill";

const CreatePost = () => {
  return (
    <>
      <Helmet>
        <title>New Post - Vital Blog</title>
        <meta name="description" content="Create New Post" />
      </Helmet>
      ;
      <div className="create__post">
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <form action="">
                  <h1>Submit your Post</h1>
                  <div className="create__post-card">
                    <div className="create__post-group">
                      <h2>Post Information</h2>
                      <div className="textInputGroup">
                        <label htmlFor="title">Topic Title*</label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="textInputGroup__control"
                          placeholder="Blog Title"
                        />
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col md={6}>
                          <div   className="selectGroup">
                            <label htmlFor="title">Language</label>

                            <Form.Select
                            
                              aria-label="Floating label select example"
                              className="selectGroup-text"
                            >
                              <option value="1">English</option>
                              <option value="2">Bangla</option>
                            </Form.Select>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="selectGroup">
                            <label htmlFor="title">Content type</label>

                            <Form.Select
                              aria-label="Floating label select example"
                              className="selectGroup-text"
                            >
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CreatePost;

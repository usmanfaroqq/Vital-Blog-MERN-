import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
      <div  className="create__post">
        <Container >
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

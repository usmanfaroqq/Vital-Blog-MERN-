import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const UpperNavbar = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const Links = user ? (
    <> 
      <Link className="top__banner-text gap-2" to="/dashboard">
        {user.name}
      </Link> / /
      <Link to="/logout" className="top__banner-text  gap-2">
        Logout
      </Link>{" "}
    </>
  ) : (
    < >
      {" "}
      <Link className="top__banner-text  " to="/login">
        Login
      </Link> / / 
      <Link to="/register" className="top__banner-text  ">
        Register
      </Link>{" "}
    </>
  );

  return (
    <div className=" py-2 bg-dark border-bottom">
      <Container className="d-flex align-items-center justify-content-between ">
        <div className="list-unstyled d-flex align-items-center gap-4 ">
          <Link className="top__banner-text" to="/">
            {" "}
            About
          </Link>
          <Link className="top__banner-text" to="/">
            {" "}
            Events
          </Link>
          <Link className="top__banner-text" to="/">
            {" "}
            Write for us
          </Link>
          <Link className="top__banner-text for-hidden" to="/">
            {" "}
            In the press
          </Link>
        </div>
        <div>{Links}</div>
      </Container>
    </div>
  );
};

export default UpperNavbar;

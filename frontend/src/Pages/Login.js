import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  Link,
  Navigate,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { useRef } from "react";
import "./styles.css";
// import SignUp from "./SignUpPage";

const Login = ({ isAdmin = false }) => {
  const applicant_id = useRef(null);
  const applicant_password = useRef(null);
  const [isError, setIsError] = useState(false);
  let applicantCredentials = { id: "", pass: "" };
  const [authData, setAuthData] = useState();
  const navigate = useNavigate();

  // const [formData, setFormData] = useOutletContext();

  const oldLogin = "/applicant/home";
  const newLogin = "/applicant/first_login";

  const fetchData = async (obj) => {
    await fetch(`/loginData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: obj }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAuthData(data);
        // console.log(authData);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (applicant_password === applicant_rePassword) {
    applicantCredentials.id = applicant_id.current.value;
    applicantCredentials.pass = applicant_password.current.value;
    // }

    await fetchData(applicantCredentials);
    // console.log(authData);
    if (authData.flag === false) {
      setIsError(true);
    } else {
      setIsError(false);
      if (authData.data.length === 0) {
        navigate(newLogin, { state: { id: authData.id } });
      } else {
        console.log(authData.data);
        navigate(oldLogin, {
          state: {
            id: authData.id,
            data: authData.data,
            pref_details: authData.pref_details.rows,
          },
        });
      }
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-title">
          {!isAdmin ? "Welcome to the Login Page" : ""}
        </div>
        <div className="login-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>{!isAdmin ? "Applicant Id" : "Admin Id"}</Form.Label>
              <Form.Control
                required
                ref={applicant_id}
                size="lg"
                type="text"
                placeholder="Enter your Id"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={applicant_password}
                size="lg"
                type="password"
                placeholder="Password"
              />
              <Form.Text className="text-danger">
                {isError && "Error! Wrong Credentials"}
              </Form.Text>
            </Form.Group>
            <Button className="mb-3" size="lg" variant="danger" type="submit">
              Login
            </Button>
            <br />
            New User?
            <br />
            <Link to={!isAdmin ? "/signup" : "#"}>
              <Button
                className="mb-3"
                size="lg"
                variant="outline-danger"
                type="submit"
              >
                {!isAdmin ? "Sign Up" : "Contact Admin"}
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

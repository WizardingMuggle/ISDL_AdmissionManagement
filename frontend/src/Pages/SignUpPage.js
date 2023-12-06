import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./styles.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Signup } from "../Classes/Signup";

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [applicationId, setApplicationId] = useState(null);
  const [phoneError, setPhoneError] = useState(false);

  const applicant_emailId = useRef(null);
  const applicant_phoneNo = useRef(null);
  const applicant_password = useRef(null);

  const signupObject = new Signup();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const fetchData = async (obj) => {
    await fetch(`/signUpData`, {
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
        setApplicationId(data);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePassword(applicant_password.current.value)) {
      setIsError(true);
      return;
    }

    if (!isError) {
      signupObject.email_id = applicant_emailId.current.value;
      signupObject.phone_no = applicant_phoneNo.current.value;
      signupObject.password = applicant_password.current.value;

      await fetchData(signupObject);

      setSignedUp(true);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="signup-title">Welcome to the Sign-Up Page</div>
        <div className="signup-form">
          <Alert show={signedUp} variant="danger">
            <Alert.Heading>Thanks for becoming an Applicant</Alert.Heading>
            <p>
              You have successfully signed up! Your Application Id is -{" "}
              {applicationId}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Link to={"/login"}>
                <Button size="lg" variant="dark">
                  Login
                </Button>
              </Link>
            </div>
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                ref={applicant_emailId}
                size="lg"
                type="email"
                placeholder="Enter Your Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                ref={applicant_phoneNo}
                size="lg"
                type="numeric"
                placeholder="Enter Your 10-Digit Phone Number"
                onChange={(e) => {
                  if (
                    e.target.value > 999999999 &&
                    e.target.value < 99999999999
                  ) {
                    setPhoneError(false);
                  } else {
                    setPhoneError(true);
                  }
                }}
              />
              <Form.Text className="text-danger">
                {phoneError && "Phone Number must be of 10-Digits"}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={applicant_password}
                size="lg"
                type="password"
                placeholder="Type a Password (Minimum 6 characters, at least 1 uppercase letter)"
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {isError && " Enter valid password"}
            </Form.Text>
            <br />
            <Button className="mb-3" size="lg" variant="danger" type="submit">
              Sign-Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleValidation = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!inputValue.length) {
        setErrorMessage(`${inputType} is required`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setErrorMessage("email sent");

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="contactArea">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            value={userName}
            name="userName"
            onChange={handleInputChange}
            onBlur={handleValidation}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleValidation}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            name="message"
            placeholder="Your message here"
            onChange={handleInputChange}
            onBlur={handleValidation}
          />
        </Form.Group>
        <div className="buttonCenter">
        <button type="button" className="contactButton" onClick={handleFormSubmit}>
          Submit
        </button>
        </div>
      </Form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

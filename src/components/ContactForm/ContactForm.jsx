import React, { useState, setState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formObject, setFormObject] = useState({name:"",email:"",message:""});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.email && formObject.message) {
      // TODO: add nodemailer
      // console.log(
      //   `Email form contents: ${formObject.name}, ${formObject.email}, ${formObject.message}`
      // );
      setFormObject({name:"",email:"",message:""})
    }
  }

  return (
    // <div className="row">
    <div className="col-md-6">
      <h2 className="px-2 pt-3">Message Me!</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group px-3">
          <label></label>
          <input
            onChange={handleInputChange}
            value={formObject.name}
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group px-3">
          <label ></label>
          <input
            onChange={handleInputChange}
            name="email"
            value={formObject.email}
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="form-group px-3">
          <label ></label>
          <textarea
            onChange={handleInputChange}
            name="message"
            value={formObject.message}
            className="form-control"
            id="message"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          id="message-submit"
          type="submit"
          className="btn btn-info my-3"
        >
          Submit
        </button>
      </form>
    </div>
    // </div>
  );
};

export default ContactForm;

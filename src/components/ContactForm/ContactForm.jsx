import React, { useState, setState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const { errors, handleSubmit, reset } = useForm();

  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const toastifySuccess = () => {
    toast("Message sent!", {
      // position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = () => {
    console.log("new msg")
    const templateParams = {
      name: formObject.name,
      email: formObject.email,
      message: formObject.message,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        setFormObject({ name: "", email: "", message: "" });
        toastifySuccess();
        console.log("success")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <h2 className="px-2 pt-3">Message Me!</h2>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
          <label></label>
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
          <label></label>
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
        <div className="form-group px-3">
          <button
            id="message-submit"
            type="submit"
            className="btn btn-primary px-3 my-3"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;

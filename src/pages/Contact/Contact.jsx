import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <div id="contact-page" className="content-page">
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <h1>Contact</h1>
            </div>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

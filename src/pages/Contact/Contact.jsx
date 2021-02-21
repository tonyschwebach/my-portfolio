import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";



const Contact = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h1>Contact</h1>
        </div>
        <ContactInfo />
        <ContactForm />
        
      </div>
    </div>
  );
};

export default Contact;

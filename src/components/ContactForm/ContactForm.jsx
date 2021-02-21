import React from "react";

const ContactForm = () => {
  return (
    // <div class="row">
    <div className="col-md-6">
 
        <h2 class="px-2 pt-3">Message Me!</h2>
        <form>
          <div class="form-group px-3">
            <label for="name"></label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="form-group px-3">
            <label for="email"></label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>

          <div class="form-group px-3">
            <label for="message"></label>
            <textarea
              class="form-control"
              id="message"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button id="message-submit" type="submit" class="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    // </div>
  );
};

export default ContactForm;

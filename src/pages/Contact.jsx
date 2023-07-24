import React from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvojgdeg");

  if(state.succeeded){
    return (
      <h1 className="thank-you-msg">Thank you for Contacting Shopease!</h1>

    )
  }else {
      return (
    <div className="contact-page">
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Full Name *" required />
        <input id="email" type="email" name="email" placeholder="E-mail" />
        <textarea id="message" name="message" placeholder="Message *" rows={10} required />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
  }


};

export default Contact;

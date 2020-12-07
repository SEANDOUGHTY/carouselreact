import React, { useState } from "react";
import emailjs from 'emailjs-com'; 

declare var process: {
  env: {
    SERVICE_ID: string
    TEMPLATE_ID: string
    USER_ID: string
  }
};


const ContactForm = () => {
  
  const [messageSent, setMessageSent] = useState(false);

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm(process.env["SERVICE_ID"], process.env["TEMPLATE_ID"], e.target, process.env["USER_ID"])
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setMessageSent(true);
  }
  
  return (messageSent ?
    <div>
      <h3>Message Recieved</h3>
      <p>We will be in touch with you soon!</p>
    </div>
    :
    <div className="form-block">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="from_name" className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="reply_to" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
        </div>
        <button type="submit" value="Send" className="btn btn-info btn-md">Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
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
    <div className="text-right">
      <h3>پیام شما دریافت شد.</h3>
      <p>به زودی با شما در تماس خواهیم بود.</p>
    </div>
    :
    <div className="form-block text-right">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label>نام</label>
          <input type="text" name="from_name" className="form-control" placeholder="نام" />
        </div>
        <div className="form-group">
          <label>آدرس ایمیل</label>
          <input type="email" name="reply_to" className="form-control" placeholder="ایمیل" />
        </div>
        <div className="form-group">
          <label>پیام</label>
          <textarea name="message" className="form-control" id="formControlTextarea1" rows={5}></textarea>
        </div>
        <button type="submit" value="Send" className="btn btn-info btn-md">ارسال</button>
      </form>
    </div>
  );
}
export default ContactForm;
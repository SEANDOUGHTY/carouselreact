import React from 'react';

const ContactForm = () => (
    <div className="form-block">
    <form>
      <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" id="InputName" placeholder="Enter name" />
      </div>
      <div className="form-group">
      <label>Email address</label>
      <input type="email" className="form-control" id="InputEmail" placeholder="Enter email" />
      </div>
      <div className="form-group">
      <label>Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
      </div>
      <button type="submit" className="btn btn-info btn-md">Send Message</button>
    </form>
    </div>
  );

export default ContactForm;
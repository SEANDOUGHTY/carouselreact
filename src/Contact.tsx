import React from 'react';
import ContactForm from './components/ContactForm';
import image from './assets/logo/logo-512.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => (
    <body>
    <div className="contact">
    <section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
      <div className="container contact-container">
        <div className="row">
          <div className="col-md-8">
          <ContactForm />
          </div>
          <div className="col-md-4">
            <div className="contact-details">
            <img src={image} width="150px" alt="logo" className="img-rounded border"></img>
            <h4>Delooman</h4>
              
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />  123 Main Street<br />
                Toronto, Ontario<br />
                M5S 3K4
              </p>
              <p><FontAwesomeIcon icon={faPhoneAlt}  /> (111) 111-1111</p>
              <p><FontAwesomeIcon icon={faEnvelope}  />  email@email.com</p>
            </div>
          </div>
        </div>  
      </div>
    </section>
    </div>
    </body>
  );

export default Contact;
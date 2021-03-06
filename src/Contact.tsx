import React from 'react';
import ContactForm from './components/ContactForm';
import image from './assets/logo/logo-512.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = (data: any) => (
  <div className="text-right contact" dir="rtl">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">{data.info.contactTitle}</h2>
        <p className="text-center w-responsive mx-auto mb-5">{data.info.contactMessage}</p>
        <div className="container contact-container">
          <div className="row">
            <div className="col-md-8 col-contact-form">
              <ContactForm />
            </div>
            <div className="col-md-3">
              <div className="contact-details text-right float-right">
                <img src={image} width="150px" alt="logo" className="img-rounded border" />
                <h4>{data.info.company}</h4>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />  {data.info.address[0]}<br />
                  {data.info.address[1]}<br />
                  {data.info.address[2]}
                </p>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> {data.info.phoneNumber}</p>
                <p><FontAwesomeIcon icon={faEnvelope} />  {data.info.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
);

export default Contact;
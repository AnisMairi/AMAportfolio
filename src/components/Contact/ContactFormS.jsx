"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactFormS({ noLine }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email...');

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contact' className="contact-sec section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Reach Out</h6>
              <h3 className="wow color-font">
                Let's Get in Touch And Make Cool Things Together.
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="messages"></div>
                <div className="controls">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input id="form_name" type="text" name="user_name" placeholder="Name" required="required" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input id="form_email" type="email" name="user_email" placeholder="Email" required="required" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input id="form_object" type="text" name="user_object" placeholder="Object" required="required" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button className="butn bord curve mt-30" type="submit">
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {
        !noLine &&
        <div className="line bottom left"></div>
      }
    </section>
  );
}

export default ContactFormS;
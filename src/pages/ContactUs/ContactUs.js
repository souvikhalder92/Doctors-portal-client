import React from 'react';
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';


const ContactUs = () => {
    return (
        <section
          className="mt-20 lg:mt-28 text-center py-14"
          style={{
            background: `url(${appointment})`,
          }}
        >
          <div className="mb-2">
            <div>
              <h3 className="text-secondary font-bold">Contact Us</h3>
              <h1 className="text-white text-3xl my-3 w-11/12 mx-auto">
                Stay connected with us
              </h1>
            </div>
            <div>
              <input
                className="my-3 input input-bordered input-md w-11/12 lg:w-full lg:max-w-xs"
                type="email"
                name=""
                placeholder="Email Address"
              />
              <br />
              <input
                className="my-3 input input-bordered input-md w-11/12 lg:w-full lg:max-w-xs"
                type="text"
                name=""
                placeholder="Subject"
              />
              <br />
              <textarea
                className="my-3 w-11/12 lg:w-full lg:max-w-xs textarea textarea-bordered"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Your message"
              ></textarea>
              <br />
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </section>
      );
};

export default ContactUs;
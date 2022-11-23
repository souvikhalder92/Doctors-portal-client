import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';

import DentalCare from '../../DentalCare/DentalCare';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div  className='mx-5'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <DentalCare></DentalCare>
          <MakeAppointment></MakeAppointment>
          <Testimonial></Testimonial>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
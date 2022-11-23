import React from 'react';
import img1 from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div>
              <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
   <div className='relative lg:w-1/2'>
   <img src={img1} className="lg:w-4/5 h-96 rounded-lg shadow-2xl" alt='' />
  
   </div>
    <div className='lg:w-1/2'>
      <h1 className="my-4 lg:text-5xl text-2xl font-bold">Exceptional Dental <br/> Care,on Your Terms
      </h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default DentalCare;
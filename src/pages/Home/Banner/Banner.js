import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero bg-img">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
            <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id adipisci fuga architecto. Nesciunt, laboriosam velit magnam praesentium eaque cum.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    </div>
    );
};

export default Banner;
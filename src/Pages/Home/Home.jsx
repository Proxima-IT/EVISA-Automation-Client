import React from 'react';
import HeroBanner from '../../Components/Banner/Banner';
import DemoPreview from '../../Components/DemoPreview/DemoPreview';
import Countries from '../../Components/Countries/Countries';
import HappyCustomers from '../../Components/HappyCustomers/HappyCustomers';
import SuccessStory from '../../Components/SuccessStory/SuccessStory';
import CustomerReview from '../../Components/CustomerReview/CustomerReview';
import Howitworks from '../../Components/Howitworks/Howitworks';

const Home = () => {
    return (
        <div className='space-y-10 bg-teal-50 dark:bg-gray-700'>
            <HeroBanner></HeroBanner>
            <Howitworks></Howitworks>
            {/* <DemoPreview></DemoPreview> */}
            {/* <Countries></Countries> */}
            <HappyCustomers></HappyCustomers>
            {/* <SuccessStory></SuccessStory> */}
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;
import React from 'react';
import HeroBanner from '../../Components/Banner/Banner';
import DemoPreview from '../../Components/DemoPreview/DemoPreview';
import Countries from '../../Components/Countries/Countries';
import HappyCustomers from '../../Components/HappyCustomers/HappyCustomers';
import SuccessStory from '../../Components/SuccessStory/SuccessStory';
import CustomerReview from '../../Components/CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div className='space-y-20'>
            <HeroBanner></HeroBanner>
            {/* <DemoPreview></DemoPreview> */}
            {/* <Countries></Countries> */}
            <HappyCustomers></HappyCustomers>
            {/* <SuccessStory></SuccessStory> */}
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;
import React from 'react';
// import siteLogo from '../../assets/siteLogo.png';
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { RiMessage3Fill } from "react-icons/ri";
import { FaGlobeEurope } from "react-icons/fa";
import { Link } from 'react-router';


const Footer = () => {
    return (
        <div>
            <footer className='rounded-t-3xl flex flex-col justify-between items-center footer sm:footer-horizontal p-3 bg-[#1a3c4c] dark:bg-amber-50 text-yellow-50 dark:text-[#1a3c4c]'>
                <div className='flex lg:flex-row flex-col justify-between gap-5 lg:gap-30'>
                    <aside className='lg:mt-25'>
                        <h1 className="flex justify-center items-center gap-2 font-bold text-2xl"><FaGlobeEurope className="" />VisaAutomated</h1>
                    </aside>
                    <div className='lg:mt-12'>
                        <h1 className='text-2xl font-bold'>Useful Links</h1>
                        <div className='grid grid-row-3 text-lg font-bold '>
                            <Link to="/aboutUs">About Us</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/profileSettings">Profile</Link>
                        </div>
                    </div>
                
                    <div className='flex flex-col-reverse'>
                        <nav>
                            <h1 className="lg:mt-10 text-2xl font-bold ">Connect With Us!</h1>
                            <div className="mt-4 flex gap-10">
                                <a target="_blank" href='https://x.com'><BsTwitterX size={25}></BsTwitterX></a>
                                <a target="_blank" href='https://www.facebook.com'><ImFacebook2 size={25}></ImFacebook2></a>
                                <a target="_blank" href='https://www.instagram.com/nushrath_momita/'><ImInstagram size={25}></ImInstagram></a>
                                <a target="_blank" href='https://www.facebook.com'><RiMessage3Fill size={30}></RiMessage3Fill></a>
                            </div>
                        </nav>
                    </div>
                    <div className='lg:mt-10 text-xl'>
                        <h1 className="text-2xl font-bold">Disclaimer</h1>
                        <p>Please note that this website is intended to provide <br /> general information 
                            and is not intended to provide <br/> any legal advice and should not be relied on as such.</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold mt-0 text-yellow-50 dark:text-[#1a3c4c]'>&copy; All rights belong to EVISA APPOINTMENTS</h1>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
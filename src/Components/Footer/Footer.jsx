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
       <footer className="mt-130 rounded-t-3xl flex lg:flex-row flex-col justify-between footer sm:footer-horizontal p-10 bg-[#8679c1] text-[#ffffff]">
            <aside className='lg:mt-10'>
                <h1 className="flex justify-center items-center gap-2 font-extrabold text-2xl lg:text-3xl"><FaGlobeEurope className="" />VisaAutomated</h1>
            </aside>
            <div className='text-2xl font-extrabold mt-12'>
                <h1>Useful Links</h1>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/profileSettings">Profile</Link>
            </div>
            <div className='flex flex-col-reverse'>
                <h1 className='text-2xl font-extrabold mt-15'>&copy; All rights belong to the website owner</h1>
                <nav>
                    <h1 className="lg:mt-10 text-2xl font-extrabold ">Connect With Us!</h1>
                    <div className="mt-4 flex gap-10">
                        <a target="_blank" href='https://x.com/NushrathH18021'><BsTwitterX size={25}></BsTwitterX></a>
                        <a target="_blank" href='https://www.facebook.com/nushrathmomita'><ImFacebook2 size={25}></ImFacebook2></a>
                        <a target="_blank" href='https://www.instagram.com/nushrath_momita/'><ImInstagram size={25}></ImInstagram></a>
                        <a target="_blank" href='https://www.facebook.com/messenger/'><RiMessage3Fill size={30}></RiMessage3Fill></a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
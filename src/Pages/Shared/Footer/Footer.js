import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className=' bg-secondary footer text-center text-white pb-5 '>
            <p ><small>copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;
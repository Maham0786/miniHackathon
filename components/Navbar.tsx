import App from 'next/app';
import Link from 'next/link';
import React from 'react';
import Herosection from '../Homepage/Herosection';

export default function Navbar() {
    return (
        <nav className="flex bg-black h-24 text-white items-center px-4">
            <img className="h-10 mx-4" src="pakwheels.png" alt="Pakwheels logo" />
            
            <div className="flex-grow flex justify-start space-x-7">
                <Link href="#UsedCars"><p className="px-4 py-2">Used Cars</p></Link>
                <Link href="#NewCars"><p className="px-4 py-2">New Cars</p></Link>
                <Link href="#Bikes"><p className="px-4 py-2">Bikes</p></Link>
                <Link href="#AutStore"><p className="px-4 py-2">AutoStore</p></Link>
                <Link href="#Videos"><p className="px-4 py-2">Videos</p></Link>
                <Link href="#Forums"><p className="px-4 py-2">Forums</p></Link>
                <Link href="#Blog"><p className="px-4 py-2">Blog</p></Link>
                <Link href="#More"><p className="px-4 py-2">More</p></Link>
            </div>

            <button className="bg-red-800 rounded-md text-white mx-4 px-6 h-10">
                <Link href="#PostAnAd"><p>Post an Ad</p></Link>
            </button>
        </nav>
    );
}
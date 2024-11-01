import React from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image"; 

const Car2 = () => {
    return (
        <div className="bg-blue-100 items-center text-center justify-center h-screen">
            <h1 className="text-center justify-center underline font-semibold text-2xl py-10">
                Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
            </h1>

            <Image 
                className="justify-center h-60 w-70 mx-auto my-18"
                src="/Suzuki_Alto.png"
                alt=""
                width={280} 
                height={240}
            />

        
            <button className="bg-white mx-2 my-12 hover:bg-blue-800 hover:text-white border border-black rounded-md w-40 h-10">
                Book a test drive
            </button>
            <button className="rounded-md mx-2 border hover:bg-blue-800 hover:text-white border-black bg-white w-52 h-10">
                Request Bank Finance
            </button>
            <button className="items-center mx-2 border hover:bg-blue-800 hover:text-white border-black rounded-md bg-white w-36 h-10">
                Visit Place
            </button>
            <button className="rounded-md mx-2 border hover:bg-blue-800 hover:text-white border-black bg-white w-40 h-10">
                Car Inspection
            </button>

            <div className="bg-blue-100 h-screen flex flex-col items-center text-center px-36 py-4">
                <h2 className="font-normal text-2xl mb-4">Vehicle Description</h2>
                <div className="flex flex-wrap justify-center text-center space-x-8 mb-6">
                    <span className="items-center text-center justify-center"><strong>Number of Doors</strong> 4</span>
                    <span><strong>Engine</strong> 1800</span>
                    <span><strong>Condition</strong> 8.5/10</span>
                    <span><strong>Driven</strong> 9,500 KM</span>
                    <span><strong>Suspension Type</strong> Soft Suspension</span>
                    <span><strong>Avg</strong> 13 km per liter</span>
                    <span><strong>Transmission</strong> Automatic</span>
                    <span><strong>Fuel Type</strong> High Octane</span>
                </div>

                <div className="text-center mt-2">
                    <p className="text-green-600 text-2xl font-semibold">PKR 23.3 - 30.5 lacs</p>
                    <Link href="/form">
                        <button className="bg-blue-800 text-white py-2 my-6 px-6 w-38 h-10 rounded-md">
                            Make Payment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Car2;


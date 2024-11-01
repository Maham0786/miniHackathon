import React from "react";
import Link from "next/link";
import Image from "next/image";

const Car4 = () => {
    return (
        <div className="bg-blue-100 flex flex-col items-center text-center justify-center min-h-screen">
            <h1 className="underline font-semibold text-2xl py-10">
                Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
            </h1>
            <Image 
                className="justify-center my-8" 
                src="/Honda_Civic.jpg" 
                alt="Honda Civic" 
                width={280} 
                height={200} 
            />
            <div className="flex flex-wrap justify-center space-x-4 my-4">
                <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-40 h-10">
                    Book a test drive
                </button>
                <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-52 h-10">
                    Request Bank Finance
                </button>
                <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-36 h-10">
                    Visit Place
                </button>
                <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-40 h-10">
                    Car Inspection
                </button>
            </div>

            <div className="bg-blue-100 flex flex-col items-center text-center px-4 py-4">
                <h2 className="font-normal text-2xl mb-4">Vehicle Description</h2>
                <div className="flex flex-wrap justify-center space-x-8 mb-6">
                    <span><strong>Number of Doors:</strong> 4</span>
                    <span><strong>Engine:</strong> 1800</span>
                    <span><strong>Condition:</strong> 8.5/10</span>
                    <span><strong>Driven:</strong> 9,500 KM</span>
                    <span><strong>Suspension Type:</strong> Soft Suspension</span>
                    <span><strong>Avg:</strong> 13 km per ltr</span>
                    <span><strong>Transmission:</strong> Automatic</span>
                    <span><strong>Fuel Type:</strong> High Octane</span>
                </div>
                <p className="text-green-600 text-2xl font-semibold">PKR 86.6 - 99.0 lacs</p>
                <Link href="/form">
                    <button className="bg-blue-800 text-white py-2 px-6 my-6 w-38 h-10 rounded-md">
                        Make Payment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Car4;

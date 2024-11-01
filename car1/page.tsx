import React from "react";

import Image from "next/image";

import Link from "next/link";

const Car1 = () => {
  return (
    <div className="bg-blue-100 flex flex-col items-center text-center justify-center min-h-screen">
      <h1 className="underline font-semibold text-2xl py-10">
        Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      
      <div className="relative h-60 w-70 mx-auto my-10">
        <Image
          src="/Toyota_Corolla.jpg"
          alt="Toyota Corolla 2024"
        
          width={280}
          height={240}/>
        
      </div>


      <div className="flex flex-wrap justify-center space-x-4 my-6">
        <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-40 h-10 mx-2">
          Book a test drive
        </button>
        <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-52 h-10 mx-2">
          Request Bank Finance
        </button>
        <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-36 h-10 mx-2">
          Visit Place
        </button>
        <button className="bg-white hover:bg-blue-800 hover:text-white border border-black rounded-md w-40 h-10 mx-2">
          Car Inspection
        </button>
      </div>

    
      <div className="bg-blue-100 flex flex-col items-center px-10 py-4">
        <h2 className="font-normal text-2xl mb-4">Vehicle Description</h2>
        <div className="flex flex-wrap justify-center space-x-8 mb-6">
          <span><strong>Number of Doors: </strong>4</span>
          <span><strong>Engine: </strong>1800</span>
          <span><strong>Condition: </strong>8.5/10</span>
          <span><strong>Driven: </strong>9,500 KM</span>
          <span><strong>Suspension Type: </strong>Soft Suspension</span>
          <span><strong>Avg: </strong>13 km per ltr</span>
          <span><strong>Transmission: </strong>Automatic</span>
          <span><strong>Fuel Type: </strong>High Octane</span>
        </div>


        <p className="text-green-600 text-2xl font-semibold">PKR 50,00,000</p>
        <Link href="/form" passHref>
          <button className="bg-blue-800 text-white py-2 my-6 px-6 rounded-md w-38 h-10">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Car1;



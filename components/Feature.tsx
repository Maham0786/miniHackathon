import React from "react";
import Link from "next/link";
import Image from "next/image";

function Feature() {
    return (
        <div className="px-28 bg-gray-100 min-h-screen my-14">
            <h1 className="py-8 font-semibold text-2xl text-gray-600 px-1">Featured New Cars</h1>
            <div className="flex px-24">
                <button className="text-gray-600 decoration-blue-500 hover:underline text-lg focus:underline focus:text-gray-600 focus:decoration-blue-500 active:decoration-blue-500 focus:font-semibold active:font-semibold hover:font-semibold">
                    Popular
                </button>
                <button className="hover:underline px-14 text-gray-600 text-lg decoration-blue-500 focus:underline focus:text-gray-600 focus:decoration-blue-500 active:decoration-blue-500 focus:font-semibold active:font-semibold hover:font-semibold">
                    Upcoming
                </button>
                <button className="hover:underline text-gray-600 text-lg px-2 decoration-blue-500 focus:underline focus:text-gray-600 focus:decoration-blue-500 active:decoration-blue-500 focus:font-semibold active:font-semibold hover:font-semibold">
                    Newly Launched
                </button>
            </div>

            <div className="flex flex-row items-center mt-8 gap-4">
                <div className="bg-white p-4 w-60 text-center shadow-md">
                    <Link href="/toyotacorolla">
                        <Image
                            className="mb-4"
                            src="/Toyota_Corolla.jpg" // Ensure "Toyota_Corolla.jpg" is in the "public" folder
                            alt="Toyota Corolla"
                            width={240}
                            height={180}
                        />
                    </Link>
                    <Link href="/car1">
                        <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-300">Toyota Corolla</h2>
                    </Link>
                    <p className="text-green-600">PKR 59.7 - 75.5 lacs</p>
                </div>

                <div className="bg-white p-4 w-60 text-center shadow-md">
                    <Link href="/suzukialto">
                        <Image
                            className="mb-4"
                            src="/Suzuki_Alto.png"
                            alt="Suzuki Alto"
                            width={240}
                            height={180}
                        />
                    </Link>
                    <Link href="/car2">
                        <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-300">Suzuki Alto</h2>
                    </Link>
                    <p className="text-green-600">PKR 23.3 - 30.5 lacs</p>
                </div>

                <div className="bg-white p-4 w-60 text-center shadow-md">
                    <Link href="/hondacity">
                        <Image
                            className="mb-4"
                            src="/Honda_City.jpg" 
                            alt="Honda City"
                            width={240}
                            height={180}
                        />
                    </Link>
                    <Link href="/car3">
                        <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-300">Honda City</h2>
                    </Link>
                    <p className="text-green-600">PKR 46.5 - 58.5 lacs</p>
                </div>

                <div className="bg-white p-4 w-60 text-center shadow-md">
                    <Link href="/hondacivic">
                        <Image
                            className="mb-4"
                            src="/Honda_Civic.jpg" 
                            alt="Honda Civic"
                            width={240}
                            height={180}
                        />
                    </Link>
                    <Link href="/car4">
                        <h2 className="text-lg font-semibold text-blue-900 hover:text-blue-300">Honda Civic</h2>
                    </Link>
                    <p className="text-green-600">PKR 86.6 - 99.0 lacs</p>
                </div>
            </div>
        </div>
    );
}

export default Feature;

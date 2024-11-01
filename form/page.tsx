import React from "react";
import Link from "next/link";

const Form = () => {
    return (
        <div className="bg-blue-50">
            <h1 className="mt-7 text-3xl py-10 font-semibold text-center uppercase">
                Enter your details
            </h1>
            <div>
                <form className="m-10 flex gap-5 justify-center items-center flex-col border">
                    <input
                        type="text"
                        className="p-2 gap-5 rounded-md w-2/5 border my-3"
                        placeholder="Enter your name"
                    />
                    <input
                        type="email"
                        className="p-2 gap-5 rounded-md w-2/5 border"
                        placeholder="Enter your email"
                    />
                    <input
                        type="text"
                        className="p-2 gap-5 rounded-md w-2/5 border"
                        placeholder="Card Number"
                    />
                    <input
                        type="text"
                        className="p-2 gap-5 rounded-md w-2/5 border"
                        placeholder="Address"
                    />
                    <Link href="/thankyou">
                        <button className="py-2 px-7 rounded-lg bg-blue-800 text-white mt-5">
                            Place your order
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Form;

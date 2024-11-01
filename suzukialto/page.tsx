import Link from "next/link";

const suzukialto = () => {
    return (
        <div className="bg-blue-100 items-center text-center justify-center h-screen">
            <h1 className="text-center justify-center items-center underline font-semibold text-2xl py-10">
                Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
            </h1>
            <img className="justify-center h-60 w-70 mx-auto my-18" src="Suzuki_Alto.jpg" alt="Suzuki Alto" />
            
            <p className="py-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, 
                non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti 
                quaerat aperiam optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda 
                nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat 
                laborum. Deleniti quaerat aperiam optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis 
                neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
            </p>
            
            <div className="text-center justify-center items-center mt-2 bg-blue-100">
                <p className="text-green-600 text-2xl font-semibold">PKR 23.3 - 30.5lacs</p>
                <Link href="/form">
                    <button className="bg-blue-800 text-white py-2 my-6 px-6 w-38 h-10 rounded-md">
                        Make Payment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default suzukialto;

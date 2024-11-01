import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-black text-white text-xl text-center my-60 py-4 w-full">
            <Link href="https://www.linkedin.com/in/maham-waheed-422200336/" passHref>
    
                    <h4>@2024 Made by Maham Waheed. All rights reserved</h4>
                
            </Link>
        </div>
    );
};

export default Footer;

import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-5 bg-black">
            <div className="text-3xl font-bold text-pink-500">BA</div>
            <nav>
                <ul className="flex space-x-5">
                    <li><a href="#about" className="hover:text-pink-500">About Me</a></li>
                    <li><a href="#services" className="hover:text-pink-500">Services</a></li>
                    <li><a href="#portfolio" className="hover:text-pink-500">Portfolio</a></li>
                    <li><a href="#contact" className="hover:text-pink-500">Hire Me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

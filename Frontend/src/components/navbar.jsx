import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menandai status login
    const [username, setUsername] = useState(''); // State untuk menyimpan nama pengguna

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Menutup menu ketika item menu diklik pada mode mobile
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Fungsi untuk logout
    const handleLogout = () => {
        // Lakukan proses logout di sini
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Smart Spend</span>
                <div className="flex items-center">
                    {isLoggedIn ? ( // Tampilkan username dan tombol logout jika user sudah login
                        <>
                            <div className="hidden md:flex md:items-center md:w-auto">
                                <span className="text-gray-900 dark:text-white">{username}</span>
                                <button onClick={handleLogout} className="ml-4 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-700">Logout</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="hidden md:flex md:items-center md:w-auto">
                                <ul className="flex flex-row md:space-x-8" onClick={closeMenu}>
                                    <li>
                                        <NavLink to="/login" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-700">Login</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                    <button onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`md:hidden absolute top-16 right-4 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col md:flex-row md:space-x-8" onClick={closeMenu}>
                        <li>
                            <NavLink to="/login" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-700">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

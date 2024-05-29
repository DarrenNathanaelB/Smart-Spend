import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kirim data pendaftaran ke /api/register
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setRegistrationMessage('Registration success');
                } else {
                    setRegistrationMessage('Registration failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setRegistrationMessage('An error occurred, please try again');
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            {/* Tambahkan opsi 'Remember Me' jika diperlukan */}
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: lock-closed */}
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M3 5a3 3 0 016 0v2H3V5zm2 2h2V5a1 1 0 00-2 0v2zm7.464 7.071a4 4 0 00-5.654 0l-.708.707a1 1 0 01-1.415-1.414l.707-.707a6 6 0 018.486 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707zm.707.707a6 6 0 01-8.486 0l-.707-.707a1 1 0 111.414-1.414l.707.707a4 4 0 005.654 0l.707-.707a1 1 0 111.414 1.414l-.707.707zM6 7h2V5a2 2 0 00-2 2zm6 0h2V7a2 2 0 00-2-2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign up
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">{registrationMessage}</p>
                    <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

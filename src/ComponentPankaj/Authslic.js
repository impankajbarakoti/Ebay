import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login, LogOut } from "./AuthSlice";

const Check = () => {
    const [input, setInput] = useState("");
    const isLogin = useSelector((state) => state.auth.isLogin);
    const username = useSelector((state) => state.auth.username);
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (input.trim() !== "") {
            dispatch(Login(input));
            setInput("");
        }
    };

    const handleLogout = () => {
        dispatch(LogOut());
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">
                {isLogin ? (
                    <>
                        <h1 className="text-2xl font-bold text-green-600 mb-4">
                            Welcome, {username}
                        </h1>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <button
                            onClick={handleLogin}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full transition duration-200"
                        >
                            Login
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Check;

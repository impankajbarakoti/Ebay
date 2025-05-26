import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login as loginAction, LogOut } from './AuthSlice';
import { useNavigate } from 'react-router-dom'; 
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const isLogin = useSelector((state) => state.auth.isLogin);
  const username = useSelector((state) => state.auth.username);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      dispatch(loginAction(email));
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    dispatch(LogOut());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">

        {isLogin ? (
          <>
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
              Welcome, {username}
            </h2>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
              Login to eBay
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              Don’t have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Dummy user (baad me API ya localStorage se load kar sakte ho)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
  };

  const [formData, setFormData] = useState(user);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-md">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-8">
          Your Profile
        </h2>

        {/* Profile Form */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded-lg p-3 focus:outline-none ${
                isEditing ? "border-blue-500 focus:ring-2 focus:ring-blue-400" : "bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded-lg p-3 focus:outline-none ${
                isEditing ? "border-blue-500 focus:ring-2 focus:ring-blue-400" : "bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded-lg p-3 focus:outline-none ${
                isEditing ? "border-blue-500 focus:ring-2 focus:ring-blue-400" : "bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          {isEditing ? (
            <button
              onClick={toggleEdit}
              className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={toggleEdit}
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          )}

          <button className="w-full sm:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

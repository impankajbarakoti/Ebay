import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
  };

  
  const [formData, setFormData] = useState(user);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">

        
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Your Profile</h2>

        
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
              disabled={!isEditing}
            />
          </div>

          
          <div className="flex justify-between items-center mt-4">
            {isEditing ? (
              <button
                onClick={toggleEdit}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={toggleEdit}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit Profile
              </button>
            )}

            
            <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// UserProfile.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../store/slices/AuthSlice.js";

const UserProfile = () => {
  const navigate = useNavigate();
  // const { userId } = useParams();
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  if (user == null) {
    return <div>User not found</div>; // Handle user not found
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default UserProfile;

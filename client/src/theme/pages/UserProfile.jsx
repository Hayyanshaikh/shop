// UserProfile.js
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../store/slices/AuthSlice.js";

const UserProfile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user])
  
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <div className="container mx-auto mt-10">
      {
        user && <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span> {user.user.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {user.user.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Gender:</span> {user.user.gender}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Username:</span> {user.user.username}
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" onClick={handleLogout}>logout</button>
      </div> 
      }
    </div>
  );
};

export default UserProfile;

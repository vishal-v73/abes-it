import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setUserData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // On Logout, clear user data and navigate to Register page
    setUserData(null);
    navigate("/register");
  }, [setUserData, navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;

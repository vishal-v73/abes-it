import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/CounterApp">Counterapp</Link> {/* Correct case and component */}
          </li>
          <li>
            <Link to="/ImageApp">imaageapp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainLayout;

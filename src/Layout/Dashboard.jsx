import { FaAd, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          <li><NavLink to='/dashboard/userHome'><FaHome/> User Home</NavLink></li>
          <li><NavLink to='/dashboard/cart'><FaShoppingCart/> My Cart</NavLink></li>
          <li><NavLink to='/dashboard/reservation'><FaCalendar/> Reservation</NavLink></li>
          <li><NavLink to='/dashboard/review'><FaAd/> Review</NavLink></li>
          <li><NavLink to='/dashboard/review'><FaAd/>Add a Review</NavLink></li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
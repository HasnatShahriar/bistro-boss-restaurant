import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();


  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          {
            isAdmin ?
              <>
                <li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/manageItems'><FaList />Manage Items</NavLink></li>
                <li><NavLink to='/dashboard/addItems'><FaUtensils />Add Items</NavLink></li>
                <li><NavLink to='/dashboard/bookings'><FaBook /> Manage Bookings</NavLink></li>
                <li><NavLink to='/dashboard/users'><FaUsers />All Users</NavLink></li>
              </>
              :
              <>
                <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                <li><NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink></li>
                <li><NavLink to='/dashboard/review'><FaAd /> Review</NavLink></li>
                <li><NavLink to='/dashboard/paymentHistory'><FaAd />Payment History</NavLink></li>
              </>
          }
          {/* shared nav links */}
          <div className="divider"></div>
          <li><NavLink to='/'><FaHome />Home</NavLink></li>
          <li><NavLink to='/order/salad'><FaSearch />Menu</NavLink></li>
          <li><NavLink to='/order/contact'><FaEnvelope />Contact</NavLink></li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
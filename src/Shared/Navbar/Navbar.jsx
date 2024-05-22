import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const navOptions = <div className="flex">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order/salad'>Order</Link></li>
    <li><Link to='/secret'>Secret</Link></li>
    <li>
      <Link to='/dashboard/cart'>
        <button className="btn btn-sm">
          <FaCartArrowDown className="mr-2" />
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </Link>
    </li>

    {
      user ? <>
        {/* <span>{user?.displayName}</span> */}
        <button onClick={handleLogOut} className="btn btn-ghost btn-sm">Log Out</button>
      </>
        : <><li><Link to='/login'>Login</Link></li></>
    }
  </div>
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
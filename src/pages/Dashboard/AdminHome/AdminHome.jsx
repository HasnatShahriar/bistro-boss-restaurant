import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { FaDollarSign, FaJediOrder, FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();


  const { data: stats = {} } = useQuery({
    queryKey: ['Admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }

  })

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi,Welcome </span>
        {
          user?.displayName ? user?.displayName : 'Back'
        }
      </h2>

      <div className="stats shadow my-8">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl" />
          </div>
          <div className="stat-title font-bold">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"/>
          </div>
          <div className="stat-title font-bold">Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl"/>
          </div>
          <div className="stat-title font-bold">MenuItems</div>
          <div className="stat-value">{stats.menuItems}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaJediOrder className="text-3xl"/>
          </div>
          <div className="stat-title font-bold">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>

   

      </div>
    </div>
  );
};

export default AdminHome;
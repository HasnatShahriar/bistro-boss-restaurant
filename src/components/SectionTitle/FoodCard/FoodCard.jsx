import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";




const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch]= useCart();


  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to the database
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 2500
            });
            //  refetch cart to update the cart items come
            refetch();
          }
        })
    }
    else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate('/login', { state: { from: location } });
        }
      });
    }
    // console.log(food,user.email);
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="food image" /></figure>
      <p className="bg-slate-900 text-white absolute right-5 px-4 py-2 top-2">{price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
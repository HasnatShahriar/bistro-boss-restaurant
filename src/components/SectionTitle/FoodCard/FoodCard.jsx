

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="food image" /></figure>
      <p className="bg-slate-900 text-white absolute right-5 px-4 py-2 top-2">{price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
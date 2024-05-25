import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from './../../../hooks/useAxiosPublic';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      // now send the menu item to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      // 
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success pop up
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been saved`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('with image url', res.data);
  }
  return (
    <div>
      <SectionTitle heading={'Add an Item'} subHeading={"What's new?"} />
      <div className="bg-blue-50 px-6 py-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <select defaultValue={'default'} {...register("category", { required: true })}
                className="select select-bordered w-full">
                <option value={'default'} disabled >Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
            </label>
          </div>
          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
          </label>
          {/* file input */}
          <div className="form-control w-full my-6">
            <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>
          {/* submit button */}
          <button className="btn text-white bg-black">
            Add Item <FaUtensils className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
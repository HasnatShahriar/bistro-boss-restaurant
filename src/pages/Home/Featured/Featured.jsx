import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item text-white pt-10 my-20">
      <SectionTitle subHeading='Check it out' heading='Featured Items' />
      <div className="md:flex justify-center items-center px-36 pb-20 pt-12">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 12, 2024</p>
          <p className="uppercase">Where can I get some</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto officiis aperiam quae necessitatibus odio Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi tempore cupiditate, dolor officia iure reprehenderit numquam excepturi! Aliquid commodi accusantium blanditiis ea in culpa asperiores natus distinctio reprehenderit voluptatum..</p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
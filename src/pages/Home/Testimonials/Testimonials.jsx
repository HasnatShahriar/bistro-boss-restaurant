import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReviews(data)
      })
  }, [])
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={'What Our Client Say'}
        heading={'Testimonials'}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide key={review._id} >

            <div className="flex flex-col items-center gap-6 mx-24 my-12">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>

    </div>
  );
};

export default Testimonials;
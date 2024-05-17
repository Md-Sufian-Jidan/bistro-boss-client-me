import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle heading="Testimonial" subHeading="---What Our Clients Say---" />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews?.map(review => <SwiperSlide key={review?._id}>
                        <div className="flex flex-col items-center my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                readOnly
                            />
                            {/* <img src={quote} className="w-12 pt-5" alt="" /> */}
                            <p className="py-8">{review?.details}</p>
                            <h3 className="text-2xl  text-orange-400">{review?.name}</h3>
                        </div>
                    </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default Reviews;
import React, { useRef } from "react";
import { MdAccountCircle } from "react-icons/md";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Suman",
      date: "11/05/2023",
      comment: "Great quality",
      rating: 5,
    },
    {
      id: 2,
      name: "Riya",
      date: "11/03/2023",
      comment: "Very pretty dress",
      rating: 5,
    },
    {
      id: 3,
      name: "Payal",
      date: "11/03/2023",
      comment: "Just waaoooo",
      rating: 5,
    },
    {
      id: 4,
      name: "Payal",
      date: "11/03/2023",
      comment: "Just waaoooo",
      rating: 5,
    },
    {
      id: 5,
      name: "Payal",
      date: "11/03/2023",
      comment: "Just waaoooo",
      rating: 5,
    },
  ];

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of each card + gap
      scrollRef.current.scrollLeft +=
        direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="relative    pb-6 border-b border-gray-100 ">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Customer Reviews
      </h2>
      {/* Carousel */}
      <div className="relative w-auto ">
        <div
          ref={scrollRef}
          className="flex ml-3 mr-3 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[400px] min-h-[300px] max-w-[500px] flex-shrink-0 bg-white border rounded-lg shadow-md p-4 m-2"
            >
              {/* Rating */}
              <div className="flex items-center mb-2">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} className="text-reviewColor text-xs pr-1">
                    ★ 
                  </span>
                ))}
              </div>

              {/* Review Content */}
              <div> 
                <div className="flex flex-row items-center pb-3">

              <MdAccountCircle className="h-6 w-6"  />
                <p className="pl-5  font-semibold text-reviewColor">{review.name}</p>
                </div>
                <p className="text-gray-500 pb-12 text-sm">{review.date}</p>
                <p className="text-gray-800">{review.comment}</p>
              </div>

              {/* Full Review Link */}
              <a
                href="/product"
                className="text-reviewColor pt-12 font-medium text-sm mt-4 inline-block"
              >
                Full Review
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-reviewColor text-2xl   p-2 ro "
        >
          &lt;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-reviewColor text-2xl   p-2 rounded-full  "
        >
          &gt;
        </button>
      </div>

      {/* Read More Reviews Button */}
      <div className="text-center mt-6">
        <button className="bg-reviewColor text-sm text-white py-2 px-6   ">
          Read More Reviews
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;

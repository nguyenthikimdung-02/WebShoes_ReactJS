import React from "react";
import Slider from "react-slick";

const Item = ({ title, description }) => (
  <div className="p-4 border rounded-lg bg-white shadow">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const testCRS = () => {
  const items = [
    { title: "Item 1", description: "Description for Item 1" },
    { title: "Item 2", description: "Description for Item 2" },
    { title: "Item 3", description: "Description for Item 3" },
    { title: "Item 4", description: "Description for Item 4" },
    { title: "Item 5", description: "Description for Item 5" },
    { title: "Item 6", description: "Description for Item 6" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Số lượng item hiển thị
    slidesToScroll: 1,
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Carousel Example</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Item key={index} title={item.title} description={item.description} />
        ))}
      </Slider>
    </div>
  );
};

export default testCRS;

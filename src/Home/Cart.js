import React, { Component } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../CSS/Main.css';

class Cart extends Component {
  render() {
    const items = [
      { title: "Dép quai ngang Trendy 3 in chữ SH be", description: "Black", price: "149.000 đ", imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" },
      { title: "Basic Tee 2", description: "White", price: "449.000 đ", imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" },
      { title: "Basic Tee 3", description: "Blue", price: "549.000 đ", imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" },
      { title: "Basic Tee 4", description: "", price: "349.000 đ", imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" },
      { title: "Basic Tee 5", description: "Red", price: "459.000 đ", imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" },
      { title: "Basic Tee 6", description: "Yellow", price: "299.000 đ", imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" },
    ];

    const settings = {
      dots: false, // Tắt các chấm tròn bên dưới
      infinite: true,
      speed: 500,
      slidesToShow: 5, // Mặc định là 5 slide cho màn hình lớn
      slidesToScroll: 1,
      nextArrow: (
          <div className="custom-arrow custom-arrow-right">
              <FaArrowRight />
          </div>
      ),
      prevArrow: (
          <div className="custom-arrow custom-arrow-left">
              <FaArrowLeft />
          </div>
      ),
      responsive: [
          {
              breakpoint: 768, // Kích thước màn hình tối đa 768px
              settings: {
                  slidesToShow: 2, // Hiển thị 2 slide cho màn hình nhỏ
              },
          },
      ],
  };
  
      

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 my-4 sm:h-[200px] lg:h-[600px]">
          <h2 className="textTitleSmall">Bất ngờ mỗi tuần</h2>
          <div className="tab-container">
              <div className="tab-item active">Outlet</div>
              <div className="tab-item">Giảm 500k Sneaker</div>
          </div>
          <Slider {...settings} >
            {items.map((item, index) => (
              <div className="group relative" key={index}  >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" style={{borderRadius: "20px 20px 0px 0px"}}>
                  <img
                    src={item.imageUrl}
                    alt={`Front of ${item.title} in ${item.description.toLowerCase()}.`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div style={{padding: "10px"}}>
                  <div>
                    <h3 className="text-gray-700 textCart">
                      <a href="#">
                        <span aria-hidden="true" ></span>
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </div>
                  <p className="textPrice text-gray-900">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 my-4 sm:h-[200px] lg:h-[600px]">
          <h2 className="textTitleSmall">Bất ngờ mỗi tuần</h2>
          <div className="tab-container">
              <div className="tab-item active">Outlet</div>
              <div className="tab-item">Giảm 500k Sneaker</div>
          </div>
          <Slider {...settings} >
            {items.map((item, index) => (
              <div className="group relative" key={index}  >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" style={{borderRadius: "20px 20px 0px 0px"}}>
                  <img
                    src={item.imageUrl}
                    alt={`Front of ${item.title} in ${item.description.toLowerCase()}.`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div style={{padding: "10px"}}>
                  <div>
                    <h3 className="text-gray-700 textCart">
                      <a href="#">
                        <span aria-hidden="true" ></span>
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </div>
                  <p className="textPrice text-gray-900">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          Hello!
        </div>

      </div>

      
    );
  }
}

export default Cart;

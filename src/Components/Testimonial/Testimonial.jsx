import React from "react";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial-heading">
        <h2>Our Happy Clients</h2>
        <lord-icon
          src="https://cdn.lordicon.com/ctlnzcle.json"
          trigger="hover"
          colors="primary:#fff,secondary:#60a2a2"
          style={{ width: "55px", height: "55px" }}
        ></lord-icon>
      </div>
      <section className="testimonial-container">
        <div className="testimonial">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSwiper={(Swiper) => {
              Swiper.navigation.nextEl.classList.add("navibtn");
              Swiper.navigation.prevEl.classList.add("navibtn");
            }}
          >
            <SwiperSlide>
              <div className="testimonial-slide">
                <img src="/coal_person.png" className="testimonial-img" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  suscipit voluptate eaque molestiae vero hic sapiente quod
                  illum distinctio modi provident molestias nostrum iure
                  repudiandae voluptas, at possimus et sunt.
                </p>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ fontSize: "30px", color: "#60b9b9" }}
                />
                <div className="testimonial-details">
                  <span className="admin-name">Raju Patel</span>
                  <span className="org-name">Saksham Coal Mine</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-slide">
                <img
                  src="/coal_person.png"
                  className="testimonial-img"
                  alt="Client Testimonial"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  suscipit voluptate eaque molestiae vero hic sapiente quod
                  illum distinctio modi provident molestias nostrum iure
                  repudiandae voluptas, at possimus et sunt.
                </p>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ fontSize: "30px", color: "#60b9b9" }}
                />
                <div className="testimonial-details">
                  <span className="admin-name">Raju Patel</span>
                  <span className="org-name">Saksham Coal Mine</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-slide">
                <img
                  src="/coal_person.png"
                  className="testimonial-img"
                  alt="Client Testimonial"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  suscipit voluptate eaque molestiae vero hic sapiente quod
                  illum distinctio modi provident molestias nostrum iure
                  repudiandae voluptas, at possimus et sunt.
                </p>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ fontSize: "30px", color: "#60b9b9" }}
                />
                <div className="testimonial-details">
                  <span className="admin-name">Raju Patel</span>
                  <span className="org-name">Saksham Coal Mine</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

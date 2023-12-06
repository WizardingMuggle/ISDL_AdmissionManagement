//Carousel Bootstrap
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import i1 from "../../Assets/360 VIEW OF LNMIIT.jpeg";
import i2 from "../../Assets/BASKETBALL COURT.jpg";
import i3 from "../../Assets/BOYS HOSTEL 2.jpg";
import i4 from "../../Assets/BOYS HOSTEL 3.jpg";
import i5 from "../../Assets/CENTRAL PLAZA.jpeg";
import "./Photo.css";
const PhotoGallery = () => {
  return (
    <section className="photo-gallery">
      <div className="photo-gallery-container">
        <div className="photo-gallery-title">
          <h2 className="tagh2">
            Photo Gallery
          </h2>
        </div>
        <Carousel className="carousel-container" variant="dark">
          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i1}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i2}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i3}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i4}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i5}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </section>
  );
};

export default PhotoGallery;

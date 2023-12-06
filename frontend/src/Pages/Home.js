import React from "react";
import GoToTop from "../Components/chirag/GoToTop";
import PhotoGallery from "../Components/HomePage/PhotoGallery";
import AboutUs from "../Components/HomePage/AboutUs";
import Footer from "../Components/chirag/Footer";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);


  return (
    <>
      {/* <p style={{ color: "pink" }}>{!data ? "Loading..." : data}</p> */}
      <div>
        <GoToTop />
        <AboutUs />
        <PhotoGallery />
        <Footer />
      </div>
    </>
  );
}

export default Home;

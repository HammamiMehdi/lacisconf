import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement2 from "../components/Announcement2";
import Announcement3 from "../components/Announcement3";

import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      
      <Navbar />
      <Slider />
      <Announcement2 />
      <Categories />
      <Announcement3 />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;

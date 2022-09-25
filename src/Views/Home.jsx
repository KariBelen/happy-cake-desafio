import React from "react";
import Img1 from "../assets/img/1.jpeg";
import Img2 from "../assets/img/2.jpeg";
import Img3 from "../assets/img/3.jpeg";
import Img4 from "../assets/img/4.jpeg";
import Img5 from "../assets/img/5.jpeg";
import Img6 from "../assets/img/6.jpeg";
import Img7 from "../assets/img/7.jpeg";
import Img8 from "../assets/img/8.jpeg";

const Home = () => {
  return (
    <div className="container pt-4">
      <h1>
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6>El lugar de los pasteles felices</h6>
      <span className="pastel">🎂</span>

      <div className="imagenes">

        <h2 className="pb-4 pt-4">Nuestros Productos</h2>

        <div className="row gx-1">
          <div className="col-12 col-md-6 col-lg-4 mb-2">
            <img src={Img1} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img src={Img2} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img src={Img3} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img src={Img4} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img src={Img5} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img src={Img6} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img src={Img7} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img src={Img8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

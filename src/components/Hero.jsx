import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { Link } from "react-router";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const images = ["carrusel-1.jpg", "carrusel-2.jpg", "carrusel-3.jpg"];

  return (
    <section className="pt-24 bg-orange-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-4">
              Bienvenido a “Hilos de Plata”
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Somos una institución benéfica con el propósito de brindar
              atención integral a los adultos mayores que se encuentran solos,
              abandonados, en riesgo social o en extrema pobreza.
            </p>
            <Link to="about">
              <Button className="rounded-3xl">
                Descubre mas sobre nosotros
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    className="rounded-lg shadow-2xl w-full h-[200px] md:h-[400px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
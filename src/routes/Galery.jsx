import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import Button from "../components/Button";
import { FaX } from "react-icons/fa6";

const Gallery = () => {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen overflow-x-hidden">
      <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center pt-4">
        Nuestra Galería
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={"galery/" + image}
                alt={`Imagen de la galería ${indexOfFirstImage + index + 1}`}
                className="w-full object-cover rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center space-x-2">
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "opacity-50" : ""}
        >
          <p className="flex items-center">
            <CgChevronLeft className="h-4 w-4" />
            Anterior
          </p>
        </Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "bg-orange-600" : ""}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? "opacity-50" : ""}
        >
          <p className="flex items-center">
            Siguiente
            <CgChevronRight className="h-4 w-4" />
          </p>
        </Button>
      </div>

      {selectedImage && (
        <div className="fixed max-h-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4 max-w-3xl ">
            <img
              src={"galery/" + selectedImage}
              alt="Imagen ampliada"
              className="max-h-screen rounded-lg"
            />
            <Button
              className="absolute top-2 right-2"
              variant="secondary"
              size="icon"
              onClick={() => setSelectedImage(null)}
            >
              <FaX className="h-4 w-4" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
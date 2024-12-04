import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-orange-600 dark:bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Hilos de Plata</h3>
            <p className="text-orange-100">Al cuidado de los adultos mayores en situaciones de vulnerabilidad.</p>
          </div>
          <div className="flex space-x-6">
            <FaFacebook className="text-2xl hover:text-orange-200 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-orange-200 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-orange-200 cursor-pointer" />
          </div>
        </div>
        <div className="mt-8 text-center text-orange-100">
          <p>&copy; {currentYear} Hilos de Plata. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

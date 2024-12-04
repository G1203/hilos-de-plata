import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Contact from "../components/Contact";
import { FaHandHoldingHeart, FaBoxOpen } from "react-icons/fa";

const Home = () => {
  const services = [
    {
      title: "Atención Médica",
      description:
        "Supervisión médica las 24 horas por profesionales calificados",
    },
    {
      title: "Actividades Sociales",
      description: "Programas recreativos y actividades grupales atractivas",
    },
    {
      title: "Cuidado Especializado",
      description:
        "Planes de cuidado personalizados para residentes con necesidades específicas",
    },
    {
      title: "Servicios de Alimentación",
      description:
        "Comidas balanceadas y nutritivas preparadas con cariño y cuidado",
    },
  ];

  const neededItems = [
    "Alimentos y suplementos nutricionales",
    "Medicinas y suministros médicos",
    "Materiales para actividades",
    "Juegos de mesa y rompecabezas",
    "Equipo de sonido",
    "Televisores",
    "Muebles",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden dark:bg-gray-900">
      <Hero />
      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-orange-400 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-orange-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-orange-400 mb-12">
            Como Puedes Ayudar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaHandHoldingHeart className="text-3xl text-orange-600 dark:text-orange-400 mr-3" />
                <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
                  Donaciones Monetarias
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Tus donaciónes nos permite continuar brindando atención de
                calidad a nuestros residentes.
              </p>
              <div className="bg-orange-100 dark:bg-gray-600 p-4 rounded-lg">
                <p className="font-semibold text-orange-600 dark:text-orange-400">
                  Cuenta de Donaciones
                </p>
                <p className="text-gray-700 dark:text-gray-300">Banco Ficohsa: 01-101-3684-40</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaBoxOpen className="text-3xl text-orange-600 dark:text-orange-400 mr-3" />
                <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
                  Objetos Necesitados
                </h3>
              </div>
              <ul className="space-y-2">
                {neededItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
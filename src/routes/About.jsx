import { motion } from "framer-motion";
import Button from "../components/Button";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 bg-orange-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-8 text-center">
            Sobre Nosotros
          </h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="about.jpg"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Fundada el 1 de mayo de 2000 por la Psicóloga Licenciada Blanca
                Lidia Erazo de Velásquez, nuestra institución se dedica a
                brindar atención integral a los adultos mayores que se
                encuentran solos, abandonados, en riesgo social o en extrema
                pobreza.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Desde nuestro inicio, hemos sido un refugio para innumerables
                personas mayores, ofreciéndoles un hogar amoroso para la etapa
                final de sus vidas.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-orange-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Nuestra misión es proporcionar un entorno de apoyo y cuidado
                para los adultos mayores, asegurando que reciban el amor, el
                cuidado y el respeto que merecen. Nos esforzamos por mejorar su
                calidad de vida a través de una atención integral que aborde sus
                necesidades físicas, mentales, espirituales y sociales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-orange-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Imaginamos un mundo donde cada adulto mayor viva con dignidad,
                comodidad y alegría. Nuestro objetivo es ser una institución
                líder en el cuidado de ancianos, conocida por nuestro enfoque
                holístico y nuestro compromiso inquebrantable con el bienestar
                de nuestros residentes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-orange-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-orange-400 mb-12">
            Nuestro Enfoque Holístico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Salud Física",
              "Bienestar Mental",
              "Crecimiento Espiritual",
              "Compromiso Social",
            ].map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  {aspect}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nos enfocamos en {aspect.toLowerCase()} para asegurar que
                  nuestros residentes alcancen un nivel óptimo de bienestar y
                  felicidad.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Si usted o un ser querido podría beneficiarse de nuestro cuidado
            compasivo y comunidad de apoyo, lo invitamos a contactarnos y
            aprender más sobre cómo podemos ayudar.
          </p>
          <Link to="/hilos-de-plata/#contact">
            <Button className="rounded-3xl">Contáctenos Hoy</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

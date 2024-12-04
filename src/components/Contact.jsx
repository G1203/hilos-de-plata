import { motion } from "framer-motion";
import Button from "./Button";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-orange-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-orange-400 mb-12">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-6">
              Ponte en contacto con nosotros
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-orange-500 dark:focus:border-orange-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-orange-500 dark:focus:border-orange-400"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-orange-500 dark:focus:border-orange-400"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Envía un mensaje
              </Button>
            </form>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <FaPhone className="text-2xl text-orange-600 dark:text-orange-400" />
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                  Celular
                </h4>
                <p className="text-gray-700 dark:text-gray-300">2225-2775</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <FaWhatsapp className="text-2xl text-orange-600 dark:text-orange-400" />
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                  WhatsApp
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  +62 838-9553-7556
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-4"
            >
              <FaEnvelope className="text-2xl text-orange-600 dark:text-orange-400" />
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                  Email
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  hilosdeplata_@hotmail.com
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <FaMapMarkerAlt className="text-2xl text-orange-600 dark:text-orange-400" />
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                  Dirección
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Barrio La Granja, segunda avenida, atrás del antiguo Crédito
                  Prendario Popular, enfrente de la Iglesia Adventista.,
                  Comayagüela, Honduras
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

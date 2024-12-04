import { useState } from "react";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeThoggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { text: "Inicio", url: "/" },
    { text: "Quienes Somos", url: "/about" },
    { text: "Galeria", url: "/galery" },
    { text: "Publicaciones", url: "/news" },
  ];

  return (
    <header className="bg-orange-100 dark:bg-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
            Hilos de Plata
          </h1>
          <button
            className="md:hidden text-orange-600 dark:text-orange-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-orange-100 dark:bg-gray-900 md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={"/hilos-de-plata" + link.url}
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-500 transition-colors"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

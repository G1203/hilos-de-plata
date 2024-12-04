import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useTheme } from "./hooks/useTheme";
const Layout = () => {
  const { dark } = useTheme();
  return (
    <main className={`font-serif ${dark ? "dark" : "light"}`}>
      <div className="dark:bg-slate-800">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;

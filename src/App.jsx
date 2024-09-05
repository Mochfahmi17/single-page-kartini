import FooterComponents from "./components/FooterComponents";
import NavbarComponents from "./components/NavbarComponents";
import HomePage from "./pages/HomePage";
import { BackgroundContext } from "./context/BackgroundContext";
import { useContext } from "react";

const App = () => {
  const { bgRed } = useContext(BackgroundContext);
  const addClassDark = bgRed ? "dark" : "";
  return (
    <div className={addClassDark}>
      {/* Navbar */}
      <NavbarComponents />
      {/* HomePage */}
      <HomePage />
      {/* Footer */}
      <FooterComponents />
    </div>
  );
};

export default App;

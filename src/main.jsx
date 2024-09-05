import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BackgroundContextProvider from "./context/BackgroundContext.jsx";
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BackgroundContextProvider>
    <App />
  </BackgroundContextProvider>,
);

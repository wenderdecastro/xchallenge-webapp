import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { ThemeContext } from "./Context/ThemeContext";

// Rotas
import Rotas from "./Routes/routes";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Rotas />
        <Footer color={theme === "dark" ? "white" : "black"} backColor={theme === "dark" ? "black" : "white" }/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Buttons from "./Pages/Buttons/Buttons";
import Inputs from "./Pages/Inputs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*for unhandled routes */}
        <Route path="*" element={<>Page not found...</>} />

        <Route path="/" element={<Navigate to={"/buttons"} />} />
        <Route path="/buttons" element={Buttons} />
        <Route path="/inputs" element={Inputs} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Buttons from "./Pages/Buttons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*for unhandled routes */}
        <Route path="*" element={<>Page not found...</>} />

        <Route path="/" element={Buttons} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

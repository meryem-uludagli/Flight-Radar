import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import List from "./pages/List";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import Map from "./pages/Map";
import List from "./pages/List";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        const [detailId, setDetailId] = useState(null);
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List />} />
      </Routes>

      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;

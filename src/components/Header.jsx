import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
const Header = () => {
  return (
    <header className="bg-white p-2 px-3 d-flex justify-content-between align-items-center shadow">
      <Link to="/" className="d-flex gap-2 align-items-center">
        <img src="/logo.png" width={40} />
        <h4>Flight-Radar</h4>
      </Link>
      <Buttons />
      <h6 className="text-black fw-bold info"> 300 Flights Found</h6>
    </header>
  );
};

export default Header;

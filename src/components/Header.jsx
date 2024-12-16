import React from "react";

const Header = () => {
  return (
    <div className="bg-white p-2 px-3 d-flex justify-content-between align-items-center shadow">
      <Link className="d-flex gap-2 align-items-center">
        <img src="/logo.png" width={40} />
        <h4>Flight-Radar</h4>
      </Link>
    </div>
  );
};

export default Header;

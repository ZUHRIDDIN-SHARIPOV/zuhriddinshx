import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="site-header">
        <div className="container">
          <div className="site-header__block"></div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);

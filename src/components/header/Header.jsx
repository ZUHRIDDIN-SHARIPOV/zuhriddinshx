import { memo } from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="site-header">
        <div className="container">
          <div className="site-header__block">
            <div className="site-header__pic"></div>
            <div className="site-header__content">
              <h1 className="site-header__content-title">Zuhriddin Sharipov</h1>
              <p className="site-header__content-location">
                Kashkadarya, Uzbekistan
              </p>
              <p className="site-header__content-job">Frontend Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);

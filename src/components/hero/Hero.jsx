import { memo } from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__block"></div>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);

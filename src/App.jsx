import { memo } from "react";
import "./App.css";
import { Header, Hero } from "./components/re-export";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default memo(App);

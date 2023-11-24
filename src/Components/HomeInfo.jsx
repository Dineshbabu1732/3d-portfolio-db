import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center rounded-xl bg-green-600 cursor-pointer py-4 px-8 text-white mx-5 shadow-lg">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Dinesh Babu</span>
        👋👽
        <br />A Passionate freelance Multimedia designer and Software engineer
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Multimedia Magic:
          <br />
          Immerse your audience with visually stunning designs.
        </p>

        <Link to="/about" className="bg-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Cutting-Edge Software Solutions: <br /> Elevate your digital
          experience with powerful functionality.
        </p>

        <Link to="/projects" className="bg-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Tailored Solutions: <br /> Every project is a unique canvas, and I
          craft solutions that fit perfectly.
        </p>

        <Link to="/contact" className="bg-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;

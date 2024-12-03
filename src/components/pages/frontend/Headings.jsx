import React from "react";
import { NavLink } from "react-router-dom";
import { imgPath } from "../../helpers/functions-general";
import { Search } from "lucide-react";

const Headings = () => {
  return (
    <div>
      <header className="bg-dark py-1">
        <div className="container">
          <div className="flex justify-between items-center px-5 py-2 lg:px-0 lg:py-0">
            <img
              src={`${imgPath}/real-chef.png`}
              alt=""
              className="lg:w-[90px] lg:h-[5rem] w-[60px]"
            />
            <nav className="hidden lg:block">
              <ul className=" flex items-center gap-5 text-white">
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>Delivery</NavLink>
                </li>
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>About</NavLink>
                </li>
              </ul>
            </nav>
            <button>
              <Search stroke={"#fff"} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headings;

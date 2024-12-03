import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footnote = () => {
  return (
    <footer className="py-24 bg-black text-white">
      <div className="container">
        <div className="grid md:grid-cols-[1fr,1fr,1fr,2fr] justify-center items-center text-center">
          <ul className="space-y-5 mb-4 border-b border-gray-500 border-opacity-25 md:border-none">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
          </ul>

          <ul className="space-y-5 mb-4 border-b border-gray-500 border-opacity-25 md:border-none">
            <li>About</li>
            <li>Menu</li>
            <li>Delivery</li>
          </ul>

          <ul className="space-y-5 mb-4 border-b border-gray-500 border-opacity-25 md:border-none">
            <li>Gallery</li>
            <li>Contact</li>
          </ul>

          <div className="flex flex-col ">
            <ul className="flex gap-5 mb-5 justify-center">
              <li>
                <Facebook />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <Youtube />
              </li>
            </ul>
            <p className="mb-3">049 554 5545</p>
            <p>10 Ave Rizal San Pablo City, Laguna</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footnote;

import React from "react";
import Navbar from "../components/Navbar";

export default function Technologies() {
  return (
    <div className="bg-gray-700 h-[100vh]">
      <Navbar />
      <div className="flex flex-wrap ml-20 mt-10 gap-20">
        <img
          className="w-[30%] h-[60%] md:mt-20 md:ml-40 "
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark-700x235.png"
          alt="React"
        />
        <img
          className="w-[13%] h-[13%] md:mt-14"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="JS"
        />
        <img
          className="w-[20%] h-[20%] md:mt-20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png"
          alt="Node.js"
        />
        <img
          className="w-[20%] md:ml-72"
          src="https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg"
          alt="MySql"
        />
        <img
          className="w-[30%]"
          src="https://cdn.cdnlogo.com/logos/t/34/tailwind-css.svg"
          alt="Tailwind"
        />
      </div>
    </div>
  );
}

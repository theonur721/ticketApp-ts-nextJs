import Link from "next/link";
import React from "react";
import { FaHome, FaTicketAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-nav p-5 md:px-10 flex justify-between ">
      <div className="flex items-center space-x-8">
        <Link
          className="flex items-center gap-2 hover:text-gray-400 transition"
          href={"/"}
        >
          <FaHome /> Anasayfa
        </Link>
        <Link
          className="flex items-center gap-2  hover:text-gray-400 transition"
          href={"/form/new"}
        >
          <FaTicketAlt /> Oluşturma
        </Link>
      </div>

      <div>
        <p>Onur</p>
      </div>
    </header>
  );
};

export default Header;

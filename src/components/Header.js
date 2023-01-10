import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";
import { useGlobalContext } from "../Context";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
// import "./favicon.ico";

const Header = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <main>
      <div className="header">
        <div className="header__logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}> POPCORN</span>
            <span style={{ color: "red" }}>TIMING</span>{" "}
          </Link>
        </div>
        <button className="sidebar-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <Sidebar />
      <Modal />
    </main>
  );
};

export default Header;
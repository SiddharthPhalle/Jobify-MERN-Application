import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NAMES from "../NAMES";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaAlignLeft />}
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">{NAMES.Dashboard}</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

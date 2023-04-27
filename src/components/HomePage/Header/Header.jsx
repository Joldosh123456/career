import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import scss from "./Header.module.scss";
import logo from '../../../assets/Header/logo.svg'

function Header() {
  return (
    <div className="container">
      <div className={scss.header}>
        <img src={logo} alt="Logo Image" />
        
      </div>
    </div>
  );
}

export default Header;

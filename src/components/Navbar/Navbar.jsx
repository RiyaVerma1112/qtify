import React from "react";
import Button from "./Button/Button";
import Search from "./Search/Search";
import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.png"
import Logo from "./Logo/Logo";



function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button> */}
      <Logo />
      <Search />
      <Button />
    </nav>
  );
}

export default Navbar;

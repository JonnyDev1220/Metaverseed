import * as React from "react";
import Link from "next/link";
import styles from "../styles/generalComp/Navbar.module.scss";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <img
          id="navbar-logo"
          src="/Black-logo.png"
          alt="Metaverseed-logo"
          width={275}
          height={50}
        />
        <div id="navbar-link" className={styles.navlinks}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>

          <Link href="/news">
            <a className={styles.link}>News</a>
          </Link>

          <Link href="/activity">
            <a className={styles.link}>Activity</a>
          </Link>

          <Link href="/portfolio">
            <a className={styles.link}>Porfolio Tracker</a>
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

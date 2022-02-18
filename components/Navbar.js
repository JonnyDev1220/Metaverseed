import * as React from "react";
import Link from "next/link";
import styles from "../styles/generalComp/Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <img
          id="navbar-logo"
          src="/White-logo.png"
          alt="Metaverseed-logo"
          width={275}
          height={50}
        />
        <div className={styles.navlinks}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>

          <Link href="/news">
            <a className={styles.link}>News</a>
          </Link>

          <Link href="/market">
            <a className={styles.link}>Market</a>
          </Link>

          <Link href="/about">
            <a className={styles.link}>About us</a>
          </Link>
        </div>

        <div className={styles.navLinksResponsive}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>

          <Link href="/news">
            <a className={styles.link}>News</a>
          </Link>

          <Link href="/market">
            <a className={styles.link}>Market</a>
          </Link>

          <Link href="/about">
            <a className={styles.link}>About us</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

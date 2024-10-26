"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  // temporary const status
  let status = "authenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"} className={styles.link}>
            Homepage
          </Link>
          <Link href={"/contact"} className={styles.link}>
            Contact
          </Link>
          <Link href={"/about"} className={styles.link}>
            About
          </Link>
          {status === "notauthenticated" ? (
            <>
              <Link href="/login">Login</Link>
              <Link href={"/"}>Homepage</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/about"}>About</Link>
            </>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

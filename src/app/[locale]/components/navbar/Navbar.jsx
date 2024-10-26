import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./navbar.module.css";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.container}>
      {/* <h1>{t("title")}</h1> */}
      <div className={styles.logo}>
        Teos
        <span className={styles.logoSpan}>Blog</span>
      </div>
      <div className={styles.socials}></div>
      <div className={styles.links}>
        <Link href={"/"} className={styles.link}>
          Homepage
        </Link>
        <Link href={"/blog"} className={styles.link}>
          Blog
        </Link>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        <Link href={"/contact"} className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

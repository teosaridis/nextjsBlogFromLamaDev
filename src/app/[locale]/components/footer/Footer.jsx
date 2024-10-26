import Image from "next/image";
import styles from "./footer.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} alt="" width={50} height={50} />
          <h1 className={styles.logoText}>Teos Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          veritatis laboriosam neque sequi deserunt culpa dignissimos? Ad
          nostrum porro fugit non, fuga consequatur architecto! Reiciendis illo
          nemo praesentium in molestiae.
        </p>
        <div className={styles.icons}>
          <Image src={"/facebook.png"} alt="" width={18} height={18} />
          <Image src={"/instagram.png"} alt="" width={18} height={18} />
          <Image src={"/tiktok.png"} alt="" width={18} height={18} />
          <Image src={"/youtube.png"} alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>React</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"}>facebook</Link>
          <Link href={"/"}>instagram</Link>
          <Link href={"/"}>tiktok</Link>
          <Link href={"/"}>youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

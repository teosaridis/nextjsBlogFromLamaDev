import Image from "next/image";
import styles from "./blogCart.module.css";
import Link from "next/link";

const BlogCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.txtContainer}>
        <div className={styles.txtDetail}>
          <span className={styles.date}>24/10/2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsum</h1>
        </Link>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has sur
        </p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCart;

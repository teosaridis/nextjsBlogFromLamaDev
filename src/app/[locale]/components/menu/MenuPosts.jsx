import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div>
      <div className={styles.items}>
        <Link className={styles.item} href={"/"}>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src={"/p1.jpeg"} alt="" fill />
          </div>
          <div className={styles.txtContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 24/10/2024</span>
            </div>
          </div>
        </Link>
        {/* DUMMY ITEMS  */}
        <Link className={styles.item} href={"/"}>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src={"/p1.jpeg"} alt="" fill />
          </div>
          <div className={styles.txtContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 24/10/2024</span>
            </div>
          </div>
        </Link>
        {/* DUMMY ITEMS  */}
      </div>
    </div>
  );
};

export default MenuPosts;

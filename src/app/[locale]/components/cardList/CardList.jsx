import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import BlogCart from "../blogCard/BlogCart";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <BlogCart />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;

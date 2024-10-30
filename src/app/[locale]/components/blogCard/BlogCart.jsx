import Image from "next/image";
import styles from "./blogCart.module.css";
import Link from "next/link";

const BlogCart = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.txtContainer}>
        <div className={styles.txtDetail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/blog/${item.id}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
        <Link href={`/blog/${item.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCart;

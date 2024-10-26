import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <b>Hey, Theo here!</b> Discover my stories and creative ideas.
      </h2>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.postImage} />
        </div>
        <div className={styles.txtContainer}>
          <h1 className={styles.postTitle}>
            Lorem Ipsum is simply dummy</h1>
          <p className={styles.postDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
          <button className={styles.btnReadMore}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

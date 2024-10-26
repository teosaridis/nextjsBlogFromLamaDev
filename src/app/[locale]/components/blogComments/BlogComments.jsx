import Image from "next/image";
import styles from "./blogComments.module.css";
import { Link } from "next/link";

function BlogComments() {
  const status = "authendicated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authendicated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to comment...</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>26/10/2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sapiente doloremque, tempore, placeat quo eveniet possimus error
            repudiandae ullam tempora saepe et eius provident quasi minus ea
            accusantium consequuntur adipisci?
          </p>
        </div>

        {/* DUMMY COMMENTS  */}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>26/10/2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sapiente doloremque, tempore, placeat quo eveniet possimus error
            repudiandae ullam tempora saepe et eius provident quasi minus ea
            accusantium consequuntur adipisci?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>26/10/2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sapiente doloremque, tempore, placeat quo eveniet possimus error
            repudiandae ullam tempora saepe et eius provident quasi minus ea
            accusantium consequuntur adipisci?
          </p>
        </div>
        {/* DUMMY COMMENTS  */}
      </div>
    </div>
  );
}

export default BlogComments;

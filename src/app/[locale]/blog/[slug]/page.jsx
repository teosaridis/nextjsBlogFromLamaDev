import Image from "next/image";
import styles from "./blogSinglePage.module.css";
import Menu from "../../components/menu/Menu";
import BlogComments from "@/app/[locale]/components/blogComments/BlogComments";

const BlogSinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.txtContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTxtContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>25/10/2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              consequuntur ipsa voluptas consequatur velit iste doloribus
              recusandae doloremque quod vel nihil pariatur quasi enim
              voluptates, ratione sed assumenda culpa perspiciatis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              consequuntur ipsa voluptas consequatur velit iste doloribus
              recusandae doloremque quod vel nihil pariatur quasi enim
              voluptates, ratione sed assumenda culpa perspiciatis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              consequuntur ipsa voluptas consequatur velit iste doloribus
              recusandae doloremque quod vel nihil pariatur quasi enim
              voluptates, ratione sed assumenda culpa perspiciatis!
            </p>
          </div>
          <div className={styles.comment}>
            <BlogComments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default BlogSinglePage;

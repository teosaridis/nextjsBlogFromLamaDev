import Image from "next/image";
import styles from "./blogSinglePage.module.css";
import Menu from "../../components/menu/Menu";
import BlogComments from "@/app/[locale]/components/blogComments/BlogComments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("error");
  }

  return res.json();
};

const BlogSinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.txtContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user.image ? (
              <div className={styles.userImgContainer}>
                <Image
                  src={data?.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            ) : (
              <div className={styles.userImgContainer}>
                <Image src={data.img} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTxtContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.createdAt.slice(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          ></div>
          <div className={styles.comment}>
            <BlogComments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default BlogSinglePage;

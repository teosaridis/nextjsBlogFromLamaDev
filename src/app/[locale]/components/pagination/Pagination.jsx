import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.pagbutton}>Previous</button>
      <button className={styles.pagbutton}>Next</button>
    </div>
  );
};

export default Pagination;

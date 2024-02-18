import styles from "./Circle.module.css";

const Circle = ({ number, active }) => {
  return (
    <div
      className={active ? `${styles.circle} ${styles.active}` : styles.circle}
    >
      {number}
    </div>
  );
};

export default Circle;

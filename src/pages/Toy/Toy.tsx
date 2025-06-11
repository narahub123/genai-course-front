import styles from "./Toy.module.css";

interface ToyProps {}

const Toy = ({}: ToyProps) => {
  return <div className={styles["toy"]}>Toy</div>;
};

export default Toy;

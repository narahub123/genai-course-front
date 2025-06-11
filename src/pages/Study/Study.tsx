import { Link } from "react-router-dom";
import styles from "./Study.module.css";

interface StudyProps {}

const Study = ({}: StudyProps) => {
  return (
    <div className={styles["study"]}>
      <Link to="/">홈</Link>
    </div>
  );
};

export default Study;

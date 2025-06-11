import { Link } from "react-router-dom";
import styles from "./Home.module.css";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className={styles["home"]}>
      <Link to="/study">공부</Link>
    </div>
  );
};

export default Home;

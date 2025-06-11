import { Link } from "react-router-dom";
import styles from "./Home.module.css";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className={styles["home"]}>
      <header className={styles["header"]}>
        <h2>GenAi 웹 서비스 과정</h2>
      </header>
      <main className={styles["main"]}>
        <div className={styles["main__nav__wrapper"]}>
          <div className={styles["main__nav__link"]}>
            <Link to="/study">공부</Link>
          </div>
          <div className={styles["main__nav__link"]}>
            <Link to="/report">과제</Link>
          </div>
          <div className={styles["main__nav__link"]}>
            <Link to="/toy">토이 프로젝트</Link>
          </div>
          <div className={styles["main__nav__link"]}>
            <Link to="/extra">기타</Link>
          </div>
        </div>
      </main>
      <footer className={styles["footer"]}>since 2025.05.09.</footer>
    </div>
  );
};

export default Home;

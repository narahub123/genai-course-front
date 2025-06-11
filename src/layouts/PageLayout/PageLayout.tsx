import { Outlet } from "react-router-dom";
import styles from "./PageLayout.module.css";

interface PageLayoutProps {}

const PageLayout = ({}: PageLayoutProps) => {
  return (
    <div className={styles["page__layout"]}>
      <Outlet />
    </div>
  );
};

export default PageLayout;

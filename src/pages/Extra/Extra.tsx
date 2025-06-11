import styles from "./Extra.module.css";

interface ExtraProps {
  className?: string;
  disabled?: boolean;
}

const Extra = ({}: ExtraProps) => {
  return <div className={styles["extra"]}>Extra</div>;
};

export default Extra;

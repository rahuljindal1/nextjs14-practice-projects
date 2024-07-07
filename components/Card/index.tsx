import classNames from "classnames";
import styles from "./styles.module.css";

export default function Card({
  children,
  customStyles = []
}: Readonly<{
  children: React.ReactNode;
  customStyles?: string[];
}>) {
  return (
    <main className={classNames(styles.mainContainer, customStyles)}>
      {children}
    </main>
  );
}

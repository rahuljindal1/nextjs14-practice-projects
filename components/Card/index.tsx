import styles from "./styles.module.css";

export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.mainContainer}>{children}</main>;
}

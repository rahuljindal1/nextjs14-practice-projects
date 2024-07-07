import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  profileImageUrl: string;
  alt: string;
  description: string;
  creator: string;
};

export default function TestimonialCard({
  profileImageUrl,
  alt,
  description,
  creator
}: Props) {
  return (
    <section className={styles.mainContainer}>
      <header>
        <Image
          src={profileImageUrl}
          alt={alt}
          height={100}
          width={100}
          className={styles.profileImage}
        />
      </header>
      <main className={styles.main}>
        <div>{description}</div>
        <div className={styles.creator}> - {creator}</div>
      </main>
    </section>
  );
}

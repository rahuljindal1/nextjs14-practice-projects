import Image from "next/image";
import classes from "./styles.module.css";

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
  creator,
}: Props) {
  return (
    <section className={classes.mainContainer}>
      <header>
        <Image
          src={profileImageUrl}
          alt={alt}
          height={100}
          width={100}
          className={classes.profileImage}
        />
      </header>
      <main className={classes.main}>
        <div>{description}</div>
        <div className={classes.creator}> - {creator}</div>
      </main>
    </section>
  );
}

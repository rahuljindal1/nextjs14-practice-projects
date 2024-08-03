"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import {
  FaFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaTwitter
} from "react-icons/fa6";
import classNames from "classnames";

export default function ProfileCard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileCard}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/service-man-avatar.jpeg"
            className={styles.image}
            alt="service-man-avatar"
            height={125}
            width={125}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.nameContainer}>
            <div className={styles.name}>Rahul Jindal</div>
            <div className={styles.username}>@rahul.jindal</div>
          </div>
          <div className={styles.socialSitesContainer}>
            <FaSquareInstagram />
            <FaFacebook />
            <FaSquareGithub />
            <FaTwitter />
          </div>
          <div className={styles.description}>
            Crafting brand and communication strategies, creating visual
            designs, leading art direction, and capturing portraits through
            photography.
          </div>
          <div className={styles.actionBtnsContainer}>
            <button
              className={classNames(styles.button, styles.followBtn)}
              onClick={() => {}}
            >
              Follow
            </button>
            <button
              className={classNames(styles.button, styles.messageBtn)}
              onClick={() => {}}
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

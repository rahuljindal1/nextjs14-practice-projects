"use client";
import Image from "next/image";
import { Button } from "../../../components";
import styles from "./styles.module.css";
import VideoPopover from "./VideoPopover";
import { useState } from "react";

export default function VideoTrailer() {
  const [showPopover, setShowPopover] = useState(false);

  const closePopover = () => {
    setShowPopover(false);
  };

  return (
    <div className={styles.mainContainer}>
      <VideoPopover show={showPopover} onClose={closePopover} />
      <div className={styles.wrapper}>
        <Image
          src={"/images/video-preview-placeholder.jpeg"}
          alt="Video Preview"
          height={200}
          width={400}
        />
        <div className={styles.title}>My Video Title</div>
        <div className={styles.description}>
          This will be the section where we will be having the video description
          and its various info like what kind of video it is and what we can
          expect from it.
        </div>
        <div className={styles.btnContainer}>
          <Button
            customStyles={[styles.btn]}
            btnText="Watch Now"
            onClick={() => {
              setShowPopover((prevState) => !prevState);
            }}
          />
        </div>
      </div>
    </div>
  );
}

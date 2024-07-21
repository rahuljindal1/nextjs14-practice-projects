"use client";

import { FaCheckCircle, FaCopy } from "react-icons/fa";
import { Button, Card } from "../../../components";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { generate as generatePassword } from "generate-password";

const GENERATE_PASSWORD_CONFIG = {
  length: 10,
  number: true
};

export default function RandomPasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [isCopyIconClicked, setIsCopyIconClicked] = useState<boolean>(false);

  const copyPasswordHandler = async () => {
    await navigator.clipboard.writeText(password);
    setIsCopyIconClicked(true);
  };

  const Icon = ({ styles }: { styles: string[] }) =>
    isCopyIconClicked ? (
      <FaCheckCircle className={classNames(styles)} />
    ) : (
      <FaCopy className={classNames(styles)} onClick={copyPasswordHandler} />
    );

  useEffect(() => {
    if (isCopyIconClicked) {
      setTimeout(() => setIsCopyIconClicked(false), 2000);
    }
  }, [isCopyIconClicked]);

  return (
    <div className={styles.mainContainer}>
      <Card customStyles={[styles.card]}>
        <div className={styles.title}>Random Password Generator</div>
        <div className={styles.passwordSection}>
          <div className={styles.passwordContent}>{password}</div>
          <Icon styles={[styles.icon]} />
        </div>
        <Button
          customStyles={[styles.btn]}
          btnText="Generate"
          onClick={() =>
            setPassword(generatePassword(GENERATE_PASSWORD_CONFIG))
          }
        />
      </Card>
    </div>
  );
}

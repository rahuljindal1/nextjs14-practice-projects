"use client";

import { Card } from "../../../components";
import styles from "./styles.module.css";
import dataSource from "./datasource";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import classNames from "classnames";
import { QandAAdapterOutput } from "./types";
import { useState } from "react";
import { qAndAAdapter } from "./Adapter";

export default function QAndASection() {
  const [dataset, setDataset] = useState<QandAAdapterOutput>(
    qAndAAdapter([...dataSource])
  );

  const markIsCollapsed = (index: number, isCollapsed: boolean) => {
    dataset.forEach((data, i) => {
      if (i === index) {
        data.isCollapsed = isCollapsed;
      }
    });
    console.log({ dataset, index, isCollapsed });
    setDataset([...dataset]);
  };

  const Icon = ({
    customStyles,
    index,
    isCollapsed
  }: {
    customStyles: string[];
    index: number;
    isCollapsed: boolean;
  }) =>
    isCollapsed ? (
      <FaRegPlusSquare
        onClick={() => markIsCollapsed(index, false)}
        className={classNames(customStyles)}
      />
    ) : (
      <FaRegMinusSquare
        onClick={() => markIsCollapsed(index, true)}
        className={classNames(customStyles)}
      />
    );

  const CollapsedContent = ({
    show,
    content
  }: {
    show: boolean;
    content: string;
  }) => {
    if (!show) {
      return <></>;
    }

    return (
      <div className={styles.collapsedContainer}>
        <div className={styles.separator}></div>
        <div className={styles.collapsedContent}>{content}</div>
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      {dataset.map(({ question, answer, isCollapsed }, index) => (
        <Card key={index} customStyles={[styles.card]}>
          <div className={styles.fixedContainer}>
            <div className={styles.fixedContent}>{question}</div>
            <Icon
              customStyles={[styles.icon]}
              index={index}
              isCollapsed={isCollapsed}
            />
          </div>
          <CollapsedContent show={!isCollapsed} content={answer} />
        </Card>
      ))}
    </div>
  );
}

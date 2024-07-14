"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { StringUtilities } from "../../services";

const stringUtilities = new StringUtilities();

export type TabConfig = {
  width: string;
  height: string;
  tabColor?: string;
  tabContainerColor?: string;
  tabTextColor?: string;
  tabContainerTextColor?: string;
  tabs: {
    tabName: string;
    element: React.ReactNode;
  }[];
};

export default function TabBar({ tabConfig }: { tabConfig: TabConfig }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const {
    height,
    width,
    tabColor = "black",
    tabTextColor = "white",
    tabContainerColor = "white",
    tabContainerTextColor = "black",
    tabs
  } = tabConfig;

  const tabNames: string[] = [];
  const elements: React.ReactNode[] = [];
  for (const tab of tabs) {
    tabNames.push(tab.tabName);
    elements.push(tab.element);
  }

  const isActiveTab = (currentIndex: number) => currentIndex === activeTabIndex;

  const RenderTabs = () => (
    <div className={styles.tabsSection}>
      {tabNames.map((tabName, index) => (
        <div
          key={index}
          title={tabName}
          onClick={() => setActiveTabIndex(index)}
          className={classNames(
            styles.tabWrapper,
            isActiveTab(index) ? styles.active : styles.nonActiveTab
          )}
          style={
            isActiveTab(index)
              ? {
                  backgroundColor: tabContainerColor,
                  color: tabContainerTextColor
                }
              : {
                  backgroundColor: tabColor,
                  color: tabTextColor
                }
          }
        >
          {stringUtilities.ellipsis(tabName)}
        </div>
      ))}
    </div>
  );

  const RenderElement = () => (
    <div className={styles.tabElementSection}>{elements[activeTabIndex]}</div>
  );

  return (
    <div className={styles.mainContainer} style={{ width, height }}>
      <RenderTabs />
      <RenderElement />
    </div>
  );
}

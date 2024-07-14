import { TabBar } from "../../../components";
import { TabConfig } from "../../../components/Tabs";
import styles from "./styles.module.css";

export default function TabView() {
  const Element = () => (
    <div className={styles.elementContainer}>
      This is my dummy element area, where we can see how a container will get
      render for the Tab view
    </div>
  );

  const tabConfig: TabConfig = {
    height: "400px",
    width: "800px",
    tabs: [
      { tabName: "Offices", element: <Element /> },
      { tabName: "Schools", element: <Element /> },
      { tabName: "Homes", element: <Element /> },
      {
        tabName:
          "A very long tab name for me which i am noticing and it is getting bigger and bigger",
        element: <Element />
      }
    ]
  };

  return (
    <div className={styles.mainContainer}>
      <TabBar tabConfig={tabConfig} />
    </div>
  );
}

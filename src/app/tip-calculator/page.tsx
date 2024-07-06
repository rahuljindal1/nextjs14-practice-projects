import TipCalculatorCard from "./components/TipCard";
import classes from "./styles.module.css";

export default function TipCalculator() {
  return (
    <div className={classes.mainContainer}>
      <TipCalculatorCard />
    </div>
  );
}

import TipCalculatorCard from "./TipCard";
import classes from "./styles.module.css";

export default function TipCalculator() {
  return (
    <div className={classes.mainContainer}>
      <TipCalculatorCard />
    </div>
  );
}

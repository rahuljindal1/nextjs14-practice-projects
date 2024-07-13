import { CardTypeEnum, GameStatusEnum } from "../../enums";
import { MatchUpRecord } from "../../types/page";
import MatchUpItem from "./MatchUpItem";
import styles from "./style.module.css";

export default function MatchUps({ matchUps }: { matchUps: MatchUpRecord[] }) {
  return (
    <div className={styles.mainContainer}>
      {matchUps.map((matchUp, index) => (
        <MatchUpItem
          key={index}
          gameTurn={matchUps.length - index}
          status={matchUp.status}
          humanCard={matchUp.humanCard}
          computerCard={matchUp.computerCard}
        />
      ))}
    </div>
  );
}

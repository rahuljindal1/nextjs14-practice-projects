import { CardTypeEnum, GameStatusEnum } from "@/app/rock-paper-scissors/enums";
import styles from "./styles.module.css";
import Card from "../../Card";
import { GiCrossedSwords } from "react-icons/gi";
import classNames from "classnames";

const containerClassMapper = {
  [GameStatusEnum.win]: styles.winner,
  [GameStatusEnum.loss]: styles.loser,
  [GameStatusEnum.tie]: styles.draw
};

const displayStatus = {
  [GameStatusEnum.win]: "winner!!!",
  [GameStatusEnum.loss]: "loser",
  [GameStatusEnum.tie]: "draw"
};

export default function MatchUpItem({
  gameTurn,
  status,
  humanCard,
  computerCard
}: {
  gameTurn: number;
  status: GameStatusEnum;
  humanCard: CardTypeEnum;
  computerCard: CardTypeEnum;
}) {
  return (
    <div
      className={classNames(styles.mainContainer, containerClassMapper[status])}
    >
      <div className={styles.infoSection}>
        <div className={styles.gameTurn}>{gameTurn}</div>
        <div>{displayStatus[status].toUpperCase()}</div>
      </div>
      <div className={styles.cardsSection}>
        <Card size="small" cardType={humanCard} />
        <GiCrossedSwords className={styles.swordIcon} />
        <Card size="small" cardType={computerCard} />
      </div>
    </div>
  );
}

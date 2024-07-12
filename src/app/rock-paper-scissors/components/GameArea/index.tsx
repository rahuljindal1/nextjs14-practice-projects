import { CardTypeEnum } from "../../enums";
import Card from "../Card";
import styles from "./styles.module.css";

export default function GameArea({
  computerSelectedCard,
  cardSelectHandler
}: {
  computerSelectedCard?: CardTypeEnum;
  cardSelectHandler: (cardType: CardTypeEnum) => void;
}) {
  return (
    <div className={styles.gameArea}>
      <div className={styles.humanGameArea}>
        <div className={styles.subTitle}>Choose your move:</div>
        <div className={styles.actionCards}>
          <Card cardType={CardTypeEnum.rock} onClick={cardSelectHandler} />
          <Card cardType={CardTypeEnum.paper} onClick={cardSelectHandler} />
          <Card cardType={CardTypeEnum.scissors} onClick={cardSelectHandler} />
        </div>
      </div>
      <div className={styles.computerGameArea}>
        <div className={styles.subTitle}>Computer Move:</div>
        <div className={styles.actionCards}>
          {computerSelectedCard ? (
            <Card cardType={computerSelectedCard} onClick={() => {}} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

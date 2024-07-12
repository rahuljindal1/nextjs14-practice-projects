import classNames from "classnames";
import styles from "./styles.module.css";
import { CardTypeEnum } from "../../enums";

const GAME_ITEMS: {
  id: CardTypeEnum;
  symbol: string;
  customStyles: string[];
}[] = [
  {
    id: CardTypeEnum.scissors,
    symbol: "✂️",
    customStyles: [styles.scissors]
  },
  {
    id: CardTypeEnum.rock,
    symbol: "🪨",
    customStyles: [styles.rock]
  },
  {
    id: CardTypeEnum.paper,
    symbol: "🖐🏻",
    customStyles: [styles.paper]
  }
];

export default function Card({
  cardType,
  onClick
}: {
  cardType: CardTypeEnum;
  onClick: (cardType: CardTypeEnum) => void;
}) {
  const gameItem = GAME_ITEMS.find((item) => item.id === cardType);

  if (!gameItem) {
    return <></>;
  }

  return (
    <div
      className={classNames(styles.mainContainer, gameItem.customStyles)}
      onClick={() => onClick(gameItem.id)}
    >
      {gameItem.symbol}
    </div>
  );
}

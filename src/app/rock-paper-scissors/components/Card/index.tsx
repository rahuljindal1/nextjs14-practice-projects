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
  onClick = () => {},
  size = "normal"
}: {
  cardType: CardTypeEnum;
  onClick?: (cardType: CardTypeEnum) => void;
  size?: "small" | "normal";
}) {
  const gameItem = GAME_ITEMS.find((item) => item.id === cardType);

  if (!gameItem) {
    return <></>;
  }

  return (
    <div
      className={classNames(
        styles.mainContainer,
        gameItem.customStyles,
        size === "small" ? styles.small : ""
      )}
      onClick={() => onClick(gameItem.id)}
    >
      {gameItem.symbol}
    </div>
  );
}

"use client";

import { useState } from "react";
import Card, { CardTypeEnum } from "./components/Card";
import styles from "./styles.module.css";

enum GameStatusEnum {
  win = "win",
  tie = "tie",
  loss = "loss"
}

const getMessage = (
  status: GameStatusEnum,
  humanSelectedCard: CardTypeEnum,
  computerSelectedCard: CardTypeEnum
) => {
  if (status == "tie") {
    return "It's a tie!";
  }

  if (status === "win") {
    return `You win! ${humanSelectedCard} beats ${computerSelectedCard}`;
  }

  return `You lose! ${computerSelectedCard} beats ${humanSelectedCard}`;
};

const getRandomComputerCard = (): CardTypeEnum => {
  const keyIndex = Math.floor(Math.random() * 3);
  const cardTypeKeys = Object.keys(CardTypeEnum);
  return CardTypeEnum[cardTypeKeys[keyIndex] as unknown as CardTypeEnum];
};

const getStatus = (
  humanSelectedCard: CardTypeEnum,
  computerSelectedCard: CardTypeEnum
): GameStatusEnum => {
  if (humanSelectedCard === CardTypeEnum.scissors) {
    if (computerSelectedCard === CardTypeEnum.rock) {
      return GameStatusEnum.loss;
    }
    if (computerSelectedCard === CardTypeEnum.paper) {
      return GameStatusEnum.win;
    }
    return GameStatusEnum.tie;
  }

  if (humanSelectedCard === CardTypeEnum.paper) {
    if (computerSelectedCard === CardTypeEnum.rock) {
      return GameStatusEnum.win;
    }
    if (computerSelectedCard === CardTypeEnum.scissors) {
      return GameStatusEnum.loss;
    }
    return GameStatusEnum.tie;
  }

  if (computerSelectedCard === CardTypeEnum.paper) {
    return GameStatusEnum.loss;
  }
  if (computerSelectedCard === CardTypeEnum.scissors) {
    return GameStatusEnum.win;
  }
  return GameStatusEnum.tie;
};

export default function RockPaperScissorsGame() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computerSelectedCard, setComputerSelectedCard] = useState<
    CardTypeEnum | undefined
  >();
  const [message, setMessage] = useState<string>("");

  const cardSelectHandler = (cardType: CardTypeEnum) => {
    const computerSelectedCard = getRandomComputerCard();
    const status = getStatus(cardType, computerSelectedCard);
    const message = getMessage(status, cardType, computerSelectedCard);
    setMessage(message);
    setComputerSelectedCard(computerSelectedCard);

    if (status === GameStatusEnum.win) {
      setHumanScore((prevState: number) => ++prevState);
    }
    if (status === GameStatusEnum.loss) {
      setComputerScore((prevState: number) => ++prevState);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>Rock Paper Scissors Game</div>
      <div className={styles.gameArea}>
        <div className={styles.humanGameArea}>
          <div className={styles.subTitle}>Choose your move:</div>
          <div className={styles.actionCards}>
            <Card cardType={CardTypeEnum.rock} onClick={cardSelectHandler} />
            <Card cardType={CardTypeEnum.paper} onClick={cardSelectHandler} />
            <Card
              cardType={CardTypeEnum.scissors}
              onClick={cardSelectHandler}
            />
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
      {message ? <div className={styles.result}>{message}</div> : <></>}
      <div className={styles.scores}>
        <div className={styles.humanScoreSection}>
          Your score: <span className={styles.humanScore}>{humanScore}</span>
        </div>
        <div className={styles.computeScoreSection}>
          Computer score:&nbsp;
          <span className={styles.computerScore}>{computerScore}</span>
        </div>
      </div>
    </div>
  );
}

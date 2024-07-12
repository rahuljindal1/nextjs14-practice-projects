"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import GameArea from "./components/GameArea";
import GameStats from "./components/GameStats";
import { GameStatusEnum, CardTypeEnum } from "./enums";
import { GameManagerService } from "./services";

const gameManagerService = new GameManagerService();

export default function RockPaperScissorsGame() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computerSelectedCard, setComputerSelectedCard] = useState<
    CardTypeEnum | undefined
  >();
  const [message, setMessage] = useState<string>("");

  const cardSelectHandler = (humanSelectedCard: CardTypeEnum) => {
    const computerSelectedCard = gameManagerService.getRandomComputerCard();
    const status = gameManagerService.getStatus(
      humanSelectedCard,
      computerSelectedCard
    );
    const message = gameManagerService.getMessage(
      status,
      humanSelectedCard,
      computerSelectedCard
    );
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
      <GameArea
        computerSelectedCard={computerSelectedCard}
        cardSelectHandler={cardSelectHandler}
      />
      {message ? <div className={styles.result}>{message}</div> : <></>}
      <GameStats humanScore={humanScore} computerScore={computerScore} />
    </div>
  );
}

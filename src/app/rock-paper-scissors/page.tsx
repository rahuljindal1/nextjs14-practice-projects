"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import GameArea from "./components/GameArea";
import GameStats from "./components/GameStats";
import { GameStatusEnum, CardTypeEnum } from "./enums";
import { GameManagerService } from "./services";
import { Button } from "../../../components";
import MatchUps from "./components/MatchUps";
import { MatchUpRecord } from "./types/page";

const gameManagerService = new GameManagerService();

export default function RockPaperScissorsGame() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computerSelectedCard, setComputerSelectedCard] = useState<
    CardTypeEnum | undefined
  >();
  const [message, setMessage] = useState<string>("");
  const [matchUps, setMatchUps] = useState<MatchUpRecord[]>([]);

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
    setMatchUps([
      {
        status,
        humanCard: humanSelectedCard,
        computerCard: computerSelectedCard
      },
      ...matchUps
    ]);

    if (status === GameStatusEnum.win) {
      setHumanScore((prevState: number) => ++prevState);
    }
    if (status === GameStatusEnum.loss) {
      setComputerScore((prevState: number) => ++prevState);
    }
  };

  const reset = () => {
    setHumanScore(0);
    setComputerScore(0);
    setComputerSelectedCard(undefined);
    setMessage("");
    setMatchUps([]);
  };

  console.log(matchUps);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>Rock Paper Scissors Game</div>
      <GameArea
        computerSelectedCard={computerSelectedCard}
        cardSelectHandler={cardSelectHandler}
      />
      {message ? <div className={styles.result}>{message}</div> : <></>}
      <GameStats humanScore={humanScore} computerScore={computerScore} />
      <div className={styles.btnContainer}>
        <Button btnText="Restart" onClick={reset} />
      </div>
      {matchUps.length !== 0 ? (
        <div className={styles.matchUpContainer}>
          <MatchUps matchUps={matchUps} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

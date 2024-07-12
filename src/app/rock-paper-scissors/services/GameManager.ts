import { CardTypeEnum, GameStatusEnum } from "../enums";

export class GameManagerService {
  #winMetric: { [key: string]: { [key: string]: GameStatusEnum } } = {
    [CardTypeEnum.scissors]: {
      [CardTypeEnum.rock]: GameStatusEnum.loss,
      [CardTypeEnum.paper]: GameStatusEnum.win,
      [CardTypeEnum.scissors]: GameStatusEnum.tie
    },
    [CardTypeEnum.rock]: {
      [CardTypeEnum.scissors]: GameStatusEnum.win,
      [CardTypeEnum.paper]: GameStatusEnum.loss,
      [CardTypeEnum.rock]: GameStatusEnum.tie
    },
    [CardTypeEnum.paper]: {
      [CardTypeEnum.scissors]: GameStatusEnum.loss,
      [CardTypeEnum.paper]: GameStatusEnum.tie,
      [CardTypeEnum.rock]: GameStatusEnum.win
    }
  };

  public getMessage(
    status: GameStatusEnum,
    humanSelectedCard: CardTypeEnum,
    computerSelectedCard: CardTypeEnum
  ) {
    if (status == "tie") {
      return "It's a tie!";
    }

    if (status === "win") {
      return `You win! ${humanSelectedCard} beats ${computerSelectedCard}`;
    }

    return `You lose! ${computerSelectedCard} beats ${humanSelectedCard}`;
  }

  public getRandomComputerCard(): CardTypeEnum {
    const keyIndex = Math.floor(Math.random() * 3);
    const cardTypeKeys = Object.keys(CardTypeEnum);
    return CardTypeEnum[cardTypeKeys[keyIndex] as unknown as CardTypeEnum];
  }

  public getStatus(
    humanSelectedCard: CardTypeEnum,
    computerSelectedCard: CardTypeEnum
  ): GameStatusEnum {
    return this.#winMetric[humanSelectedCard][computerSelectedCard];
  }
}

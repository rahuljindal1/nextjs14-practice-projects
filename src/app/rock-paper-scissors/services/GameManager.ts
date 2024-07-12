import { CardTypeEnum, GameStatusEnum } from "../enums";

export class GameManagerService {
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
  }
}

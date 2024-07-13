import { CardTypeEnum, GameStatusEnum } from "../enums";

export type MatchUpRecord = {
  status: GameStatusEnum;
  humanCard: CardTypeEnum;
  computerCard: CardTypeEnum;
};

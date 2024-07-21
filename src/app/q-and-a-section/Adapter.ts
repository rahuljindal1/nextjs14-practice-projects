import { QandAAdapterInput, QandAAdapterOutput } from "./types";

export const qAndAAdapter = (
  dataSource: QandAAdapterInput
): QandAAdapterOutput =>
  dataSource.map((data) => ({ ...data, isCollapsed: true }));

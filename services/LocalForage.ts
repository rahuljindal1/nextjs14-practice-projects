import localforage from "localforage";
import { isObject } from "lodash";

export enum KEY_NAMES {
  PINNED_PROJECT_IDS = "PINNED_PROJECT_IDS"
}

export class LocalForageService {
  public async setItem(key: KEY_NAMES, value: any) {
    await localforage.setItem(key, value);
  }

  public async getItem(key: KEY_NAMES) {
    const value = await localforage.getItem(key);
    return value;
  }
}

import localforage from "localforage";
import { isObject } from "lodash";

export enum KEY_NAMES {
  PINNED_PROJECT_IDS = "PINNED_PROJECT_IDS"
}

export class LocalForageService {
  public async setItem(key: KEY_NAMES, value: any) {
    if (isObject(value)) {
      await localforage.setItem(key, JSON.stringify(value));
    }

    await localforage.setItem(key, value);
  }

  public async getItem(key: KEY_NAMES) {
    const value = await localforage.getItem(key);
    if (!value) {
      throw new Error(`Item for key: ${key} not found`);
    }

    try {
      return JSON.parse(value as string);
    } catch (error) {
      return value;
    }
  }
}

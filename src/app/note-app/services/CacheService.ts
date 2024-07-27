export class CacheService {
  #localStorageCacheLey = "notes";

  load(key?: string) {
    return localStorage.getItem(key || this.#localStorageCacheLey);
  }

  save(data: object, key?: string) {
    localStorage.setItem(
      key || this.#localStorageCacheLey,
      JSON.stringify(data)
    );
  }
}

export class StringUtilities {
  public ellipsis(data: string): string {
    if (data.length > 10) {
      return `${data.slice(0, 10)}...`;
    }
    return data;
  }
}

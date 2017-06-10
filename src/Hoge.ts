export default class Hoge {
  constructor(private name: string) { }
  public hello() {
    return `${this.name} say "hello"`;
  }
  public bye() {
    return `${this.name} say "bye"`;
  }
}

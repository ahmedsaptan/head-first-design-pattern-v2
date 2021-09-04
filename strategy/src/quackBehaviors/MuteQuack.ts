import { QuackBehavior } from "./Quackbehavior";

export default class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("MutE!!");
  }
}

import { QuackBehavior } from "./Quackbehavior";

export default class Quack implements QuackBehavior {
  quack(): void {
    console.log("QUACK!!");
  }
}

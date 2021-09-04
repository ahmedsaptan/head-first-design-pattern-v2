import { QuackBehavior } from "./Quackbehavior";

export default class Squqack implements QuackBehavior {
  quack(): void {
    console.log("SQUACK!!");
  }
}

import { FlyBehavior } from "./flyBehaviors/FlyBehavior";
import { QuackBehavior } from "./quackBehaviors/Quackbehavior";


export default abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  abstract display(): void;
  swim() {
    console.log("all duck float, even decoys..");
  }

  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
}

import Duck from "../Duck";
import FlyWithWings from "../flyBehaviors/FlyWithWings";
import Quack from "../quackBehaviors/Quack";

export default class MallardDuck extends Duck {
  constructor() {
    super();

    // not prohram to implementaions...,
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display() {
    console.log("I'm real mallard Duck!!");
  }
}

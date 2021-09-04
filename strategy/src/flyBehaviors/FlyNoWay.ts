import { FlyBehavior } from "./FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("FLY_NO_WAY_CAN'T_FLY");
  }
}

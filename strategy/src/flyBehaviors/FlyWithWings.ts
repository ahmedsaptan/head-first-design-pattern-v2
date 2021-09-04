import { FlyBehavior } from "./FlyBehavior";

export default class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("FLY_WITH_WINGS");
  }
}

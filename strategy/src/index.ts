import Duck from "./Duck";
import MallardDuck from "./ducks/MallardDuck";
import ModelDuck from "./ducks/ModelDuck";
import FlyRocketPowered from "./flyBehaviors/FlyRocketPowered";

const mDuck: Duck = new MallardDuck();
mDuck.performFly();
mDuck.performQuack();

const model: Duck = new ModelDuck();
model.performFly();
model.performQuack();

// set flybehavior dynamically
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();

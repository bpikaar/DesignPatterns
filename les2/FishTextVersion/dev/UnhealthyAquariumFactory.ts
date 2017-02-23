/**
 * Created by bas on 20-02-17.
 */
class UnhealthyAquariumFactory implements AquariumFactory{

    // factory method
    public getFish(): Fish
    {
        let r:number = Math.floor(Math.random() * 3);

        let fish:Fish = new Fish();

        switch (r) {
            case 0:
                fish.setFishBehaviour(new DeadBehaviour(fish));
                break;
            case 1:
                fish.setFishBehaviour(new HungryBehaviour(fish));
                break;
            case 2:
                fish.setFishBehaviour(new DeadBehaviour(fish));
            default:
                break;
        }

        return fish;
    }
}
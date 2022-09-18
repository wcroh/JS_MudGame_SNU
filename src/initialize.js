import { Player } from "@/models/Player";
import { Item } from "@/models/Item";
import { Monster } from "@/models/Monster";

const init = async () => {
  Player.deleteMany();
  Item.deleteMany();
  Monster.deleteMany();

  console.log("completed");
};

init();

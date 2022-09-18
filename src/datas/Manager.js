const fs = require("fs");

class Manager {
  constructor() {}
}

class PlayerStatsManager extends Manager {
  constructor(stats) {
    super();
    this.str = stats.str;
    this.def = stats.def;
    this.hp = stats.hp;
  }
  getStats() {
    return {
      str: this.str,
      def: this.def,
      hp: this.hp,
    };
  }
}

class PlayerInventoryManager extends Manager {
  constructor(inventory) {
    super();
    this.inventory = inventory;
  }

  getInventory() {
    return this.inventory;
  }
}

const playerStatsManager = new PlayerStatsManager(
  JSON.parse(fs.readFileSync(__dirname + "/player/stats.json"))
);

const playerInventoryManager = new PlayerInventoryManager(
  JSON.parse(fs.readFileSync(__dirname + "/player/inventory.json"))
);

module.exports = {
  playerStatsManager,
  playerInventoryManager,
};

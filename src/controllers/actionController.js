import { createMap } from "@/datas/systems/map";
import { itemList } from "@/datas/systems/itemList";
import { Item } from "@/models/Item";
import routes from "@/routers/routes";
import { Monster } from "@/models/Monster";
import { getRandomStat } from "@/utils/randomStat.util";

const loseItem = async (player) => {
  let newInventory = player.items;
  let randomNum = Math.floor(Math.random() * newInventory.length);
  let playerInventory = [];

  for (let i = 0; i < newInventory.length; i++) {
    if (i !== randomNum) {
      playerInventory.push(newInventory[i]);
    }
  }
  player.items = playerInventory;

  await Item.deleteOne({ _id: newInventory[randomNum] });
  await player.save();
};

const handleItem = async (player, item) => {
  let locationMessage = `${item.name}을(를) 획득했던 곳으로 돌아왔다.`; // 해당 위치에 다시 온 경우
  const checkItem = await Item.find({ itemId: item.id, user: player._id }); // 위치 재방문 여부 확인

  // 해당 위치에 처음 온 경우
  if (checkItem.length === 0) {
    locationMessage = `${item.name}을(를) 발견했다!`;
    const _item = new Item({ itemId: item.id, user: player._id });
    player.items.push(_item._id);

    const powerType = item.power.type;
    if (powerType === "str") {
      player.str += item.power.degree;
      locationMessage += ` 공격력이 ${item.power.degree}만큼 증가한다🗡`;
    } else if (powerType === "def") {
      player.def += item.power.degree;
      locationMessage += ` 방어력이 ${item.power.degree}만큼 증가한다🛡`;
    }

    await _item.save();
    await player.save();
  }

  return locationMessage;
};

export const _getPlayground = async (req, res, next) => {
  try {
    const player = req.player;
    const map = createMap();
    const location = await map[player.y][player.x];
    const locationType = location.type;
    let locationMessage = null;
    let isBattle = false;

    let inventory = "";
    if (player.items) {
      for (const modelId of player.items) {
        const itemModel = await Item.findOne({ _id: modelId });
        const itemId = itemModel.itemId;
        const itemName = itemList[itemId].name;
        inventory += `${itemName} `;
      }
    }

    const randomEventNum = Math.floor(Math.random() * 101); // 랜덤이벤트 확률 준거 숫자

    if (randomEventNum <= location.percent) {
      // 일반 이벤트
      switch (locationType) {
        case "nothing": // 아무 일도 일어나지 않음
          locationMessage = "아무 일도 일어나지 않았습니다 🍃";
          break;
        case "battle": // 배틀
          const monster = await Monster.findOne({ id: location.monster });
          locationMessage = `🐗 ${monster.name}이(가) 등장했습니다!`;
          isBattle = true;
          break;
        case "item": // 아이템 획득
          const item = itemList[location.item];
          locationMessage = await handleItem(player, item);
          break;
        case "recover": // 체력 회복
          locationMessage = "체력이 회복되었습니다 💊";
          player.hp = 10;
          await player.save();
      }
    } else {
      // 랜덤 이벤트
      locationMessage =
        "랜덤 이벤트가 발동되었습니다! 체력이 1만큼 감소하고 기분이 나빠집니다 🤢";
      player.hp -= 1;
      if (player.hp < 0) player.hp = 0;
      await player.save();
    }

    return res.render("playground", {
      hp: player.hp,
      str: player.str,
      def: player.def,
      level: parseInt(player.exp / 10),
      x: player.x,
      y: player.y,
      locationMessage,
      inventory,
      isBattle,
    });
  } catch (error) {
    next(error);
  }
};

export const _getBattle = async (req, res, next) => {
  try {
    const player = await req.player;
    const map = createMap();
    const location = await map[player.y][player.x];
    const monster = await Monster.findOne({ id: location.monster });
    let isPlayerDie = false;
    let isMonsterDie = false;

    if (player.hp <= 2 || player.battleTurn >= 10) player.battleGiveUp = true;

    // 플레이어 사망
    if (player.hp <= 0) {
      isPlayerDie = true;
      player.battleTurn = 0;
      player.battleGiveUp = false;
      player.hp = 0;
      await player.save();
      loseItem(player);
    }

    // 몬스터 사망
    if (monster.hp <= 0) {
      isMonsterDie = true;
      player.battleTurn = 0;
      player.battleGiveUp = false;
      player.exp += 5; // 경험치 상승
      await player.save();

      monster.hp = 10;
      await monster.save();
    }

    return res.render("battle", {
      playerHp: player.hp,
      playerStr: player.str,
      playerDef: player.def,
      level: parseInt(player.exp / 10),
      x: player.x,
      y: player.y,
      monster: monster.name,
      monsterHp: monster.hp,
      monsterStr: monster.str,
      monsterDef: monster.def,
      turn: player.battleTurn,
      isGiveUp: player.battleGiveUp,
      isPlayerDie,
      isMonsterDie,
    });
  } catch (error) {
    next(error);
  }
};

// 몬스터와 공격 한 번씩 주고 받기
export const _getAttack = async (req, res, next) => {
  try {
    const player = await req.player;
    const map = createMap();
    const location = await map[player.y][player.x];
    const monster = await Monster.findOne({ id: location.monster });

    const playerDamage =
      monster.str - player.def >= 0 ? monster.str - player.def : 0;
    const monsterDamage =
      player.str - monster.def >= 0 ? player.str - monster.def : 0;

    player.battleTurn += 1;
    player.hp -= playerDamage;
    await player.save();

    monster.hp -= monsterDamage;
    await monster.save();

    return res.redirect(routes.battle);
  } catch (error) {
    next(error);
  }
};

// 배틀에서 도망가기
export const _getGiveUp = async (req, res, next) => {
  try {
    const player = await req.player;
    const map = createMap();
    const location = await map[player.y][player.x];
    const monster = await Monster.findOne({ id: location.monster });

    player.battleTurn = 0;
    player.battleGiveUp = false;
    await player.save();

    return res.render("battleGiveUp", {
      hp: player.hp,
      str: player.str,
      def: player.def,
      monster: monster.name,
    });
  } catch (error) {
    next(error);
  }
};

// 배틀에서 사망 후 재시작
export const _getRestart = async (req, res, next) => {
  try {
    const player = await req.player;
    const map = createMap();
    const location = await map[player.y][player.x];
    const monster = await Monster.findOne({ id: location.monster });

    player.x = 0;
    player.y = 0;
    player.hp = 10;
    player.exp = 0;
    player.level = 0;
    player.randomStatNum = 0;
    getRandomStat(player);
    monster.hp = 10;
    await monster.save();

    return res.redirect(routes.playground);
  } catch (error) {
    next(error);
  }
};

export const _movePlayground = async (req, res, next) => {
  try {
    const player = req.player;
    const { direction } = req.params;

    if (direction === "east") player.x += 1;
    if (direction === "west") player.x -= 1;
    if (direction === "south") player.y -= 1;
    if (direction === "north") player.y += 1;

    await player.save();

    return res.redirect(routes.playground);
  } catch (error) {
    next(error);
  }
};

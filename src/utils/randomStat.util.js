export const getRandomStat = (player) => {
  player.str = Math.floor(Math.random() * 10) + 1;
  player.def = Math.floor(Math.random() * 10) + 1;
  player.randomStatNum += 1;
  player.save();
};

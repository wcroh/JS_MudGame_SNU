// GLOBAL
const HOME = "/";
const SIGNUP = "/signup";
const ERROR = "/error";
const PLAYGROUND = "/playground";
const PLAYGROUNDMOVE = "/playground/:direction";
const BATTLE = "/playground/battle";
const ATTACK = "/playground/battle/attack";
const GIVEUP = "/playground/battle/giveup";
const RESTART = "/playground/restart";
const MOVE = "/playground/move";
const LOGOUT = "/logout";
const LOGIN = "/login";
const RANDOM = "/random";

const routes = {
  home: HOME,
  error: ERROR,
  signup: SIGNUP,
  playground: PLAYGROUND,
  playgroundmove: PLAYGROUNDMOVE,
  battle: BATTLE,
  attack: ATTACK,
  giveup: GIVEUP,
  restart: RESTART,
  move: MOVE,
  logout: LOGOUT,
  login: LOGIN,
  random: RANDOM,
};

export default routes;

import express from "express";
import routes from "@/routers/routes";
import {
  home,
  error,
  postSignup,
  getSignup,
  getPlayground,
  logout,
  getLogin,
  postLogin,
  getBattle,
  getAttack,
  getRestart,
  getGiveUp,
  movePlayground,
  getRandom,
} from "@/controllers/indexController";
import authCheckMiddleware from "@/middlewares/authCheck.middleware";

const indexRouter = express.Router();

indexRouter.get(routes.home, authCheckMiddleware, home);
indexRouter.get(routes.signup, authCheckMiddleware, getSignup);
indexRouter.post(routes.signup, postSignup);
indexRouter.get(routes.error, error);
indexRouter.get(routes.logout, logout);
indexRouter.get(routes.login, getLogin);
indexRouter.post(routes.login, authCheckMiddleware, postLogin);
indexRouter.get(routes.random, authCheckMiddleware, getRandom);

indexRouter.get(routes.playground, authCheckMiddleware, getPlayground);
indexRouter.post(routes.playgroundmove, authCheckMiddleware, movePlayground);
indexRouter.get(routes.battle, authCheckMiddleware, getBattle);
indexRouter.get(routes.attack, authCheckMiddleware, getAttack);
indexRouter.get(routes.giveup, authCheckMiddleware, getGiveUp);
indexRouter.get(routes.restart, authCheckMiddleware, getRestart);

export default indexRouter;

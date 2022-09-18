import jwt from "jsonwebtoken";
import { Player } from "@/models/Player";
import { TOKEN_NAME } from "@/constants";
import { encryptPassword } from "@/utils/auth.util";
import routes from "@/routers/routes";
import bcrypt from "bcrypt";
import {
  _getAttack,
  _getBattle,
  _getGiveUp,
  _getPlayground,
  _getRestart,
  _movePlayground,
} from "@/controllers/actionController";
import { getRandomStat } from "@/utils/randomStat.util";

export const home = async (req, res, next) => {
  try {
    const isAuthenticated = Boolean(req.player);

    if (req.player) {
      return res.render("home", {
        gameTitle: "💰 코인 슬레이어 💰",
        isAuthenticated,
        hp: req.player.hp,
        str: req.player.str,
        def: req.player.def,
        randomStatNum: 6 - req.player.randomStatNum,
      });
    }
    return res.render("home", {
      gameTitle: "💰 코인 슬레이어 💰",
      isAuthenticated,
    });
  } catch (error) {
    next(error);
  }
};

export const error = async (req, res, next) => {
  try {
    return res.render("error", { error });
  } catch (error) {
    next(error);
  }
};

export const getSignup = async (req, res, next) => {
  try {
    const isAuthenticated = Boolean(req.player);
    if (isAuthenticated) {
      console.log("이미 로그인된 상태이므로 홈으로 돌려보냅니다.");
      return res.redirect(routes.home);
    }
    return res.render("signup");
  } catch (error) {
    next(error);
  }
};

export const postSignup = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      throw new Error("username or password is missing");
    }

    const existedPlayer = await Player.findOne({ userName });

    if (existedPlayer) {
      next(new Error("player already existed"));
    }

    const token = jwt.sign({ userName }, process.env.JWT_SECRET);

    const encryptedPassword = await encryptPassword(password);

    const newPlayer = new Player({ userName, encryptedPassword });
    await getRandomStat(newPlayer);

    res.cookie(TOKEN_NAME, token);

    return res.redirect(routes.playground);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie(TOKEN_NAME);
    res.redirect(routes.home);
  } catch (error) {
    next(error);
  }
};

export const getLogin = async (req, res, next) => {
  try {
    return res.render("login");
  } catch (error) {
    next(error);
  }
};

export const postLogin = async (req, res, next) => {
  try {
    const isAuthenticated = Boolean(req.player);

    if (isAuthenticated) {
      next(new Error("already logged in"));
    }

    const { userName, password } = req.body;

    if (!userName || !password) {
      next(new Error("username or password is missing"));
    }

    const { encryptedPassword } = await Player.findOne({ userName });

    const isCorrectPassword = await bcrypt.compare(password, encryptedPassword);
    if (!isCorrectPassword) {
      next(new Error("wrong password"));
    }

    const token = jwt.sign({ userName }, process.env.JWT_SECRET);

    res.cookie(TOKEN_NAME, token);

    return res.redirect(routes.playground);
  } catch (error) {
    next(error);
  }
};

// 다시 누르면
export const getRandom = async (req, res, next) => {
  try {
    getRandomStat(req.player);
    return res.redirect(routes.home);
  } catch (error) {
    next(error);
  }
};

export const getPlayground = _getPlayground;
export const getBattle = _getBattle;
export const getAttack = _getAttack;
export const getGiveUp = _getGiveUp;
export const getRestart = _getRestart;
export const movePlayground = _movePlayground;

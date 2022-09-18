import jwt from "jsonwebtoken";
import { Player } from "@/models/Player";

const authCheckMiddleware = async (req, res, next) => {
  let decodedPayload;

  try {
    let { snu_token: token } = req.cookies;

    if (!token) {
      console.log(
        "토큰이 없으므로 req.player에 아무것도 주지 않고 그냥 넘어갑니다"
      );
      return next();
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return next(new Error("invalid token"));
      }
      decodedPayload = decoded;
    });

    const { userName } = decodedPayload;

    if (!userName) {
      next(new Error("token is not valid"));
    }

    const player = await Player.findOne({ userName });

    req.player = player;
    next();
  } catch (error) {
    next(error);
  }
};

export default authCheckMiddleware;

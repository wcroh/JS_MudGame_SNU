import "dotenv/config";
import express from "express";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import indexRouter from "@/routers/indexRouter";
import routes from "@/routers/routes";
import errorMiddleware from "@/middlewares/error.middleware";
import helmet from "helmet";
import hpp from "hpp";

const app = express();
const PORT = process.env.PORT || 3000;

// DB는 편한대로 마음대로 바꾸셔도 됩니다.
mongoose
  .connect(
    "mongodb+srv://roh:1q2w3e4r!!@testmongo.svjf0.mongodb.net/mudGame?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error(err));

// view engine setup
app.set("views", path.join(process.cwd(), "src/views"));
app.set("view engine", "pug");

// middlware
app.use(helmet());
app.use(hpp());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// serving static build fiels
app.use("/build", express.static("build"));

// router
app.use(routes.home, indexRouter);

// global error handler
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

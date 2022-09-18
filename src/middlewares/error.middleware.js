import routes from "@/routers/routes";

const errorMiddleware = (error, req, res, next) => {
  try {
    const status = error.status || 400;
    const message = error.message || "Something went wrong";
    console.error(`StatusCode : ${status}, Message : ${message}`);
    res.redirect(status, routes.error);
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;

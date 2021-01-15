import path from "path";
import KOA from "koa";
import Body from "koa-body";
import Session from "koa-session";
import Router from "koa-router";
import ORM from "koa-orm";
import usersRouter from "./router/users.js";
import umanagesRouter from "./router/umanages.js";
import knowsRouter from "./router/knows.js";

const app = new KOA(); // 实例化 koa 框架
app.keys = ['koa-key']; // 设置 koa cookie key

const ormConfig = {
    name: 'user',
    modelPath: path.join(path.resolve("./"), 'api/models'),
    // 使用的数据库的名称
    database: 'food',
      // 链接数据库用户名
    username: 'root',
      // 链接数据库密码
    password: '123456',
    // 数据库
    dialect: 'mysql',
     // 数据库地址
    host: 'localhost',
    port: "3306",
    pool: {
         //连接池最大链接数
        max: 10,
         //连接池最小链接数
        min: 0,
         //超过两分钟 回收链接
        idle: 120000,
    }
};

const orm = ORM(ormConfig);
console.log("orm: %O", orm);
app.use(orm.middleware);

const SessionConfig = {  // session 配置
    key: 'session-key',
    maxAge: 1000 * 60 * 60,  // 会话有效时间一个小时
}
app.use(Session(SessionConfig, app));  // 将 session 中间件 组注册到 koa

const bodyParser = new Body(); // 创建 koa body 的中间件实例
app.use(bodyParser);  

const router = new Router();    
// router.use("/", rootRouter.routes(), rootRouter.allowedMethods());
router.use("/users", usersRouter.routes(), usersRouter.allowedMethods());
router.use("/umanages", umanagesRouter.routes(), umanagesRouter.allowedMethods());
router.use("/knows", knowsRouter.routes(), knowsRouter.allowedMethods());

app.use(router.routes(), router.allowedMethods());
export default app.callback();
// API 公共接口 /api
import Router from "koa-router";

const router = new Router();

// 中间处理
let test = true;
async function testUsername(ctx, next) {
    console.log("/test testMiddleware");
    if (!test) {
        ctx.body = "/test testMiddleware false ";
        return;
    }
    ctx.body = "/test testMiddleware true ";
    await next();
}

// 中间处理
let test1 = true;
async function testPassword(ctx, next) {
    console.log("/test testMiddleware1");
    if (!test1) {
        ctx.body += "/test testMiddleware1 false ";
        return;
    }
    ctx.body += "/test testMiddleware1 true ";
    await next();
}

// 最终处理
// 使用局部判断去组合一个完整的请求处理
// /api/test
router.get("/", testUsername, testPassword, async (ctx, next) => {
    let { User } = ctx.orm("user");

    console.log("/test callbakck");
    ctx.status = 200;
    ctx.body += JSON.stringify(User);
});



export default router;

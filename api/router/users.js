// API 公共接口 /api
import Router from "koa-router";

const router = new Router();

// 这里定义的 url 路由地址会自动在前面添加 /api
// 所有的 /api/的请求会被分流到这里
router.get("/", async (ctx, next) => {
  const { Test } =  ctx.orm("user");

  let test = await Test.create({test:"456465"});

  let tests = await Test.findAll();

  //设定返回的类型 是文本的 json
  ctx.type = "text/json";
  ctx.body = JSON.stringify(tests);

  test.test = "apppod";
  await test.save();
  // await test.destroy();

});

export default router;

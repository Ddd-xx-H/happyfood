// API 公共接口 /api
import Router from "koa-router";

const router = new Router();


// 这里定义的 url 路由地址会自动在前面添加 /api
// 所有的 /api/的请求会被分流到这里
router.post("/", async (ctx, next)=>{
    console.log("body :%O",ctx.request.body);
    let {checkpassword, phone, ...body} = ctx.request.body;
    
    console.log("body :%O",body);

    let { User } = ctx.orm("user");
    let user = await User.create(body);
    

    // user.email = "qwe@qwe.qwe";
    await user.save();

    //设定返回的类型 是文本的 json
    ctx.type = "text/json";
    ctx.body = JSON.stringify(user);
});

export default router;
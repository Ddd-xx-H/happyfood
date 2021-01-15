// API 公共接口 /api
import Router from "koa-router";

const router = new Router();
// 这里定义的 url 路由地址会自动在前面添加 /api
// 所有 /api/store/ 的请求会被分流到这里
router.get("/", async (ctx, next) => {
    let { limit, currentPage } = ctx.query;
    if(!limit){
        limit = 10;
    }
    if(!currentPage){
        currentPage = 1
    }
    const { Know } = ctx.orm("user");
    let count = await Know.count();
    if (count === 0) {
        // 获取数据失败
        ctx.status = 500;
        ctx.body = JSON.stringify({
            title: "角色列表",
            errorTitle: "查询失败",
            errorNote: `数据库查询错误！`,
        });
        return;
    }
    
    let list = await Know.findAll({
        limit: parseInt(limit), offset: parseInt(limit) * (currentPage - 1)
    });

    console.log(list);

    //设定返回的类型 是文本的 json
    ctx.type = "text/json";
    // 直接将查找的数据，给客户端自己去显示
    ctx.body = JSON.stringify({
        result: true,
        count,
        currentPage,
        list,
        limit,
    });



    // 在这里不判断有多少个商品，显示多少，提示没有商品全部前端页面去处理
    //设定返回的类型 是文本的 json
    // console.log(list);
    // ctx.type = "text/json";
    // 直接将查找的数据，给客户端自己去显示
    // ctx.body = JSON.stringify(list);
});
export default router;
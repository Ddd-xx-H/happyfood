// API 公共接口 /api
import Router from "koa-router";

const router = new Router();
// 这里定义的 url 路由地址会自动在前面添加 /api
// 所有 /api/store/ 的请求会被分流到这里
router.get("/", async (ctx, next) => {
    let { limit, currentPage } = ctx.query;
    if (!limit) {
        limit = 10;
    }
    if (!currentPage) {
        currentPage = 1
    }
    const { Umanage } = ctx.orm("user");
    let count = await Umanage.count();
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

    let list = await Umanage.findAll({
        limit: parseInt(limit), offset: parseInt(limit) * (currentPage - 1)
    });

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

//switch开关改变状态
router.get("/changeState", async (ctx, next) => {
    let { id, ustate } = ctx.query;
    const { Umanage } = ctx.orm("user");
    // 通过查询的数据是一个数组
    let umanage = await Umanage.findAll({
        where: {
            id: parseInt(id)
        }
    })
    // 查询到的数据不止一条
    if (umanage.length !== 1) {
        ctx.body = JSON.stringify({
            result: false,
            message: "更新用户状态失败！"
        });
        return;
    }

    // 从数组提取第一对象
    umanage = umanage[0];

    umanage.ustate = ustate;
    umanage.save()
    console.log(umanage);

    ctx.type = "text/json";
    ctx.status = 200;
    ctx.body = JSON.stringify({
        result: true,
        code: 200,
        message: "更新用户状态成功！",
        umanage
    });
});

//添加用户
router.post("/", async (ctx, next) => {
    let { uname, uaddress, uphone, udata } = ctx.query;
    const { Umanage } = ctx.orm("user");
    // 通过查询的数据是一个数组
    let umanage = await Umanage.findAll({
   
    })
    // 查询到的数据不止一条
    if (umanage.length > 0) {
        ctx.body = JSON.stringify({
            result: false,
            message: "用户已存在！"
        });
        return;
    }

    // 从数组提取第一对象
    umanage = umanage[0];

    umanage.uname = uname;
    umanage.uaddress = uaddress;
    umanage.uphone = uphone;
    umanage.udata = udata;
    umanage.save()
    console.log(umanage);

    ctx.type = "text/json";
    ctx.status = 200;
    ctx.body = JSON.stringify({
        result: true,
        code: 200,
        message: "添加用户成功！",
        umanage
    });
});

export default router;
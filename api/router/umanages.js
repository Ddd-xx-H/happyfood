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
    console.log("data: %O", ctx.request.body);
    let { uname, uaddress, uphone, udata } = ctx.request.body;
    ctx.type = "text/json";
    const { Umanage } = ctx.orm("user");
    let umanage = await Umanage.findAll({ where: {uname} });
    if (umanage.length > 0) {
        ctx.status = 200;
        ctx.body = JSON.stringify({
            result: false,
            message: "添加用户失败！",
        });
        return;
    }

    // 
    umanage = await Umanage.create({ uname, uaddress, uphone, udata });
    ctx.body = JSON.stringify({
        result: true,
        message: "添加用户成功！",
        umanage: umanage,
    });
});

// 删除
router.post("/removeUmanage", async ctx => {
    let { id } = ctx.request.body;
    console.log("id: %O", id);

    const { Umanage } = ctx.orm("user");
    let deleteRoles = await Umanage.findAll({
        where: {
            id
        }
    });

    if (deleteRoles.length === 0) {
        ctx.status = 500;
        ctx.type = "text/json";
        ctx.body = JSON.stringify({
            result: false,
            message: "不存在指定的管理员数据"
        })
        return;
    }

    console.log("deleteRoles: %O", deleteRoles);
    for (let index = 0; index < deleteRoles.length; index++) {
        const element = deleteRoles[index];
        // 删除管理员数据
        await element.destroy();
    }
    ctx.status = 200;
    ctx.type = "text/json";
    ctx.body = JSON.stringify({
        result: true,
        message: "删除成功",
        deleteRoles: deleteRoles,
    })
});
export default router;
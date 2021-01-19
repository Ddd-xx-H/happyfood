import Router from "koa-router";
import { v1 as UUID } from "uuid";

const router = new Router();


/**
 * 登陆前获取一次登陆用的令牌, 令牌在10分钟内有效
 * 防止重复提交数据
 * url: /api/account/login
 * method: GET

/**
/**
 * 用户登陆处理
 * url: /api/account/login
 * method: POST
 */
router.post("/", async (ctx, next) => {
    let { token, username, password } = ctx.request.body;
    ctx.type = "text/json";

    // 临时保存 token 相关数据
    let loginToken = ctx.session.loginToken;
    let loginTokenTime = ctx.session.loginTokenTime;
    // 清空 session 内 token 相关数据
    // 只要有一次请求，用户本身已有的 token 就失效
    ctx.session.loginToken = undefined;
    ctx.session.loginTokenTime = undefined;

    // 判断登陆令牌是否有效
    if (loginTokenTime <= Date.now()
        || token !== loginToken) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "Token 无效"
        });
        return;
    }

    // 用户名去空格
    username = username.trim();

    // 用户名有效性检验
    if (username.length < 4 || username.length > 16 || (/[^a-zA-Z0-9]/.test(username))) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "账号名称无效"
        });
        return;
    }
    // 密码有效性检验
    if (password.length < 6 || password.length > 16) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "密码长度必须在6至16位之间"
        });
        return;
    }

    // 先获取 user 对应的模型 User
    // ctx.orm('store') 中的 store 就是 orm 框架当前配置名称
    // { User } 指 modelPath 设置文件夹中定义的模型中设置 modelName : User 的 user.js
    const { User } = ctx.orm('user');
    // 伪代码
    // SELECT * FROM user WHERE username=？， password=？
    let user = await User.findAll({
        where: {
            username: username,
            password: password,
            // role: role,
        }
    });
    if (user.length === 0) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "账号不存在"
        });
        return;
    }
    user = user[0];
    if (password !== user.password) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "密码错误"
        });
        return;
    }

    // 保存用户数据到 session 中
    ctx.session.user = user;

    ctx.status = 200;
    ctx.body = JSON.stringify({
        result: true,
        code: 200,
        title: "登录成功",
        message: `账号 ${username} 登录成功！`,
        // 不要直接将数据库中的用户数据返回给客户端，其中包含太多敏感信息
        user: {
            nickName: user.username,
            userMenu: user.userMenu,
            role: user.role
        }
    });
});

// 注册
router.post("/signin", async (ctx, next) => {
    let { token, username, password } = ctx.request.body;

    let signinToken = ctx.session.signinToken;
    let signinTokenTime = ctx.session.signinTokenTime;
    ctx.session.signinTokenTime = undefined;
    ctx.session.signinToken = undefined;

    ctx.type = "text/json";
    if (signinTokenTime < new Date().getTime()
        || signinToken !== token) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "注册失败",
            message: "令牌无效"
        });
        return;
    }

    username = username.trim();
    if (username.length < 6 || username.length >20
        ) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "注册失败",
            message: "用户名无效"
        });
        return;
    }
    if (password.length < 6 || password.length > 20) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "注册失败",
            message: "密码长度必须在6至16位之间"
        });
        return;
    }

    const { User } = ctx.orm(process.env.ORM_NAME);
    let user = await User.findAll({
        where: {
            username
        }
    });
    if (user.length > 0) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "注册失败",
            message: "用户名已存在"
        });
        return;
    }

    user = await User.create({ username, password });
    console.log(user);
    if (!user) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "注册失败",
            message: "数据库错误！"
        });
        return;
    }

    ctx.status = 200;
    ctx.body = JSON.stringify({
        result: true,
        code: 200,
        title: "注册成功",
        message: `账号 ${username} 注册成功！`
    });
});
export default router;
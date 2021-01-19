import { Sequelize, DataTypes, Model } from "sequelize";


/**
 * 定义一个 User class 用来映射 数据库中的 user 表
 * 为了不与之前的数据库冲突 使用新的库和表
 * User 继承orm框架中的 Model 类
 * Model 类定义一系列静态方法用于从数据库中获取数据
 * 如：
 * findAll() 查询所有数据
 * create({}) 插入数据到数据库中
 * update({}) 更新数据到数据库中
 * destroy({}) 删除数据库中的数据
 */
class User extends Model { }

// 初始化 User 内部的字段映射
export default function (sequelize, type) {
    let model = User.init({
        // 对应user表的 id 字段
        id: {
            type: DataTypes.INTEGER,    // 数据库里面的类型是 INT
            primaryKey: true,           // 索引键
            allowNull: false,           // NOT NUL
            autoIncrement: true,        // 自动增加值
            unique: true,               // 独特唯一
        },
        // 对应user表的 username 字段
        username: {
            type: DataTypes.STRING(60), // 数据库内类型是 VARCHAR(20)
            allowNull: false,           // NOT NUL
            unique: true,               // 独特唯一
        },
          // 对应user表的 password 字段
        password: {
            type: DataTypes.STRING(70), // 数据库内类型是 VARCHAR(32)
            allowNull: false,           // NOT NUL
        },
        
        // 访问的页面附带的身份
        // 买家 -> shop 页面  
        // 卖家 -> store 页面

        // 账号的角色
        // 可以是临时注册，未验证
        // 正式用户
        // VIP
        // 管理员
        // role: {
        //     // 这里登录分流 判断是否为管理员
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 0,
        // },
      
    },{
        sequelize,  // 将使用 orm 框架的实例sequelize 初始化这个 User 的定义
        tableName: "user",  // 指定对应的数据表为 user 表
        modelName: "User",  // 指定模块名称 为 "User"
        createdAt: false,
        updatedAt: false,
    });

    // 同步数据库中的表，没有则创建 user 表
    User.sync();
    // User.sync({ force: true });
    return model;
}
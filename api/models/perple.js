import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class Perple extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    let model = Perple.init({
        //对应uiser表的id字段
        //应用id
        id : {
            //数据库里面的类型是int
            type:DataTypes.INTEGER,
            //索引键
            primaryKey:true,
            //NOT NUll
            allowNull:false,
            //自动添加值
            autoIncrement:true,
            //独特唯一
            unique:true,
        },
        //消息类型
        newstype:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // 对应user表的username
        //应用名称
        appname: {
            type: DataTypes.STRING(20),
            allowNull: false,
          

        },
        //消息总量
        //对应uiser表的 password 字段
        // newstotal : {
        //     //数据库里面的类型是STRING  VARCHAR(100)
        //     type:DataTypes.STRING(100),
        //     //NOT NUll
        //     allowNull:false,
        // },
        //消息生产总量
        newsproduction: {
            type:DataTypes.STRING(30),
            allowNull:false,
        },
       
        //成功推送
        newspush:{
            type:DataTypes.STRING(30),
            allowNull:false,
        }

    },{
        //orm框架的实例
        //将使用 sequlize初始化这个User的定义
        sequelize,
        //指定模块名称
        modelName:"Perple",
        //指定对应的数据表名称
        tableName:"perple",
        //不要自动创建 createAt 字段
        createdAt:false,
        //不要自动创建 updateAt 字段
        updatedAt:false,
    })
    // 没有就创建表，有不做任何事情
    // User.sync();
    // 同步数据库中的User，删除旧表，创建新表
    Perple.sync();

    return model;
}

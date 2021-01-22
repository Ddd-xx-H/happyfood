import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class Umanage extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    let model = Umanage.init({
        //对应uiser表的id字段
        id:{
            // 数据库里的数据类型为INT
            type: DataTypes.INTEGER,
            primaryKey: true,
            // 不能为空
            allowNull: false,
            // 自增加
            autoIncrement: true,
            // 唯一性
            unique: true,
    },
        udata:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        //消息类型
        uname:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // 对应user表的username
        //应用名称
        uaddress: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        ustate: {
            type:DataTypes.BOOLEAN(),
            allowNull:false,
            
        },
       
        //成功推送
        uphone:{
            type:DataTypes.STRING(30),
            allowNull:false,
        }

    },{
        //orm框架的实例
        //将使用 sequlize初始化这个User的定义
        sequelize,
        //指定模块名称
        modelName:"Umanage",
        //指定对应的数据表名称
        tableName:"umanage",
        //不要自动创建 createAt 字段
        createdAt:false,
        //不要自动创建 updateAt 字段
        updatedAt:false,
    })
    // 没有就创建表，有不做任何事情
    // User.sync();
    // 同步数据库中的User，删除旧表，创建新表
    Umanage.sync();

    return model;
}
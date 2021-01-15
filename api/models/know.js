import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class Know extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    let model = Know.init({
        //对应uiser表的id字段
        
        Know_id:{
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
        //消息类型
        Know_desc:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        Kstate: {
            type: DataTypes.STRING(233),
            allowNull: false,
            
        },
       
        //成功推送
        Know_images:{
            type: DataTypes.STRING(45),
            allowNull: false,
        }

    },{
        //orm框架的实例
        //将使用 sequlize初始化这个User的定义
        sequelize,
        //指定模块名称
        modelName:"Know",
        //指定对应的数据表名称
        tableName:"know",
        //不要自动创建 createAt 字段
        createdAt:false,
        //不要自动创建 updateAt 字段
        updatedAt:false,
    })
    // 没有就创建表，有不做任何事情
    // User.sync();
    // 同步数据库中的User，删除旧表，创建新表
    Know.sync();

    return model;
}
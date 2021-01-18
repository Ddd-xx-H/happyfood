import { DataTypes, Model } from "sequelize";

/**
 * 定义一个 Goods class 用来映射 数据库中的 goods 表
 * 为了不与之前的数据库冲突 使用新的库和表
 */
class Nmenu extends Model { }

// 初始化 Goods 内部的字段映射
export default function (sequelize, type) {
    let model = Nmenu.init({
        Nmenu_id:{
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
        Nmenu_figure: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
     
        Nmenu_desc: {
            type: DataTypes.STRING, 
        },
        Nmenu_time: {
            type: DataTypes.STRING, 
        }
      
    }, {
        sequelize,
        //指定模块名称
        modelName:"Nmenu",
        //指定对应的数据表名称
        tableName:"nmenu",
        //不要自动创建 createAt 字段
        createdAt:false,
        //不要自动创建 updateAt 字段
        updatedAt:false, 
    });
    // 同步数据库中的表，没有则创建 goods 表
    Nmenu.sync();
    return model;
}
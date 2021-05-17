const Sequelize = require('sequelize');
const moment = require('moment');


module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({ // super는 부모의 메서드를 실행하려고 사용함
            userid:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(40),
                allowNull : false,
            },
            username:{
                type:Sequelize.STRING(10),
                allowNull:false,
            },
            userimage:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            userdt:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('userdt')).format('Y-M-D')
                }
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'users',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};

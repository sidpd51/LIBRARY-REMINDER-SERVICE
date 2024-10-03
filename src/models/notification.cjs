"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Notification extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Notification.init(
        {
            recipient: { type: DataTypes.STRING, allowNull: false },
            subject: { type: DataTypes.STRING, allowNull: false },
            body: { type: DataTypes.STRING, allowNull: false },
            status: {
                type: DataTypes.ENUM,
                values: ["PENDING", "SUCCESS", "FAILED"],
                defaultValue: "PENDING",
                allowNull: false,
            },
            scheduledFor: { type: DataTypes.DATE, allowNull: false },
        },
        {
            sequelize,
            modelName: "Notification",
        }
    );
    return Notification;
};

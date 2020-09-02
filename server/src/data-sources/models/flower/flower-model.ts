import { Sequelize, DataTypes } from 'sequelize';

export const generateFlowerModel = (db: Sequelize) => {
  return db.define(
    'Flower',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        // @ts-ignore bad Sequelize typescript def i think
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      familyId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {}
  );
};

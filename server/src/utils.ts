import { ModelCtor, Sequelize } from 'sequelize';
import { generateFamilyModel } from './data-sources/models/family/family-model';
import { generateFlowerModel } from './data-sources/models/flower/flower-model';

export interface StoreInterface {
  db: Sequelize;
  Family: ModelCtor<any>;
  Flower: ModelCtor<any>;
}

export const createStore = () => {
  const db = new Sequelize('sqlite::memory', { logging: false });

  const Family = generateFamilyModel(db);
  const Flower = generateFlowerModel(db);
  db.sync().then(() => {
    Family.bulkCreate(require('./data-sources/models/family/family-data.json'));
    Flower.bulkCreate(require('./data-sources/models/flower/flower-data.json'));
  });

  return { db, Family, Flower };
};

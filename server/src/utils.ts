import { ModelCtor, Sequelize } from 'sequelize';
import { generateFamilyModel } from './data-sources/models/family/family-model';
import { generateFlowerModel } from './data-sources/models/flower/flower-model';

export interface StoreInterface {
  db: Sequelize;
  Family: ModelCtor<any>;
  Flower: ModelCtor<any>;
}

export const createStore = async (): Promise<Sequelize> => {
  return new Sequelize('sqlite::memory', { logging: false });
};

export const addStoreSchema = async (
  db: Sequelize
): Promise<StoreInterface> => {
  const Family = generateFamilyModel(db);
  const Flower = generateFlowerModel(db);
  await db.sync();
  return { db, Family, Flower };
};

export const dbLoadTestData = async (
  store: StoreInterface
): Promise<StoreInterface> => {
  await store.Family.bulkCreate(
    require('./data-sources/models/family/family-data.json')
  );
  await store.Flower.bulkCreate(
    require('./data-sources/models/flower/flower-data.json')
  );
  return store;
};

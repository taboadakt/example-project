import { StoreInterface } from '../utils';
import { DataSource } from 'apollo-datasource';
import {
  MutationCreateFamilyArgs,
  MutationCreateFlowerArgs,
  QueryFamilyArgs,
  QueryFlowerArgs
} from '../generated/graphql';

class DB extends DataSource {
  private store: StoreInterface;
  constructor({ store }) {
    super();
    this.store = store;
  }

  // Family
  public async createFamily(args: MutationCreateFamilyArgs) {
    const { name } = args.family;
    return this.store.Family.create({
      name
    });
  }
  public async getFamily(args: QueryFamilyArgs) {
    return this.store.Family.findByPk(args.id);
  }
  public async getFamilies() {
    const families = await this.store.Family.findAll();
    for (const family of families) {
      family.flowers = await this.getFlowersByFamilyId(family.id);
    }
    return families;
  }

  // Flower
  public async createFlower(args: MutationCreateFlowerArgs) {
    const { name, familyId } = args.flower;
    const family = await this.getFamily({ id: familyId });
    if (!family) {
      throw new Error('Invalid Family ID');
    }
    return this.store.Flower.create({
      name,
      familyId
    });
  }
  public async getFlower(args: QueryFlowerArgs) {
    return this.store.Flower.findByPk(args.id);
  }
  public async getFlowers() {
    return this.store.Flower.findAll();
  }
  public async getFlowersByFamilyId(familyId) {
    return this.store.Flower.findAll({ where: { familyId } });
  }
}

export default DB;

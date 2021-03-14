import { Seeder, Factory } from 'typeorm-seeding'
import { Product } from '../../entity/Product'

export default class CreateProduct implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Product)().createMany(50)
  }
}

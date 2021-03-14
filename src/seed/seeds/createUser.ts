import { Seeder, Factory } from 'typeorm-seeding'
import { User } from '../../entity/User'

export default class CreateUser implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(User)().createMany(50)
  }
}

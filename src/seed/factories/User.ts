import Faker from 'faker'
import { define } from 'typeorm-seeding'

import { User } from '../../entity/User'

define(User, (faker: typeof Faker) => {
  const product = new User()
  product.email = faker.random.words(3)
  product.password = faker.random.words(3)

  return product
})

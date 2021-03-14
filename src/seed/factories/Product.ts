import Faker from 'faker'
import { define } from 'typeorm-seeding'

import { Product } from '../../entity/Product'

define(Product, (faker: typeof Faker) => {
  const product = new Product()
  product.name = faker.random.words(3)
  product.description = faker.lorem.paragraphs(2)
  product.price = faker.random.number(3000)
  product.imageUrl = faker.image.imageUrl()
  product.tags = ['tag1', 'tag2', 'tag3', 'tag4']

  return product
})

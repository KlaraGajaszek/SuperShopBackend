import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './Product'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany('Product', (product: Product) => product.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  products: Array<Product>
}

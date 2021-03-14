import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { User } from './User'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  imageUrl: string

  @Column('varchar', { array: true })
  tags: string[]

  @ManyToOne(() => User, (user: User) => user.products)
  @JoinColumn({ name: 'user_id' })
  user: User
}

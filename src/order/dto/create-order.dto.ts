import { Order } from '../entities/order.entity';

export class CreateOrderDto implements Omit<Order, 'id'> {
  name: string;
  description: string;
}

import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderEvents } from '../shared/enums/order-events.enum';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  public orders: Order[] = [
    {
      id: 1,
      name: 'Order #1',
      description: 'Description order #1',
    },
    {
      id: 2,
      name: 'Order #2',
      description: 'Description order #2',
    },
  ];

  constructor(private eventEmitter: EventEmitter2) {}

  create(createOrderDto: CreateOrderDto): Order {
    const order: Order = {
      id: this.orders.length + 1,
      ...createOrderDto,
    };

    this.orders.push(order);

    this.eventEmitter.emit(OrderEvents.CREATE, order);

    return order;
  }
}

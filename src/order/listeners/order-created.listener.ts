import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderEvents } from '../../shared/enums/order-events.enum';
import { OrderCreatedEvent } from '../events/order-created.event';

@Injectable()
export class OrderCreatedListener {
  @OnEvent(OrderEvents.CREATE)
  handleOrderCreatedEvent(event: OrderCreatedEvent): void {
    // handle and process `OrderCreatedEvent` event here
    console.log(event);
  }
}

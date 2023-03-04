import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderCreatedListener } from './listeners/order-created.listener';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderCreatedListener],
})
export class OrderModule {}

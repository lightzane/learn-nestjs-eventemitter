import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  get(): Order[] {
    return this.orderService.orders;
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Order {
    return this.orderService.create(createOrderDto);
  }
}

import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller('tickets')
export class TicketsController {
  @Get()
  obterTickets(): string {
    return 'Listar todos os tickets no sistema CAU';
  }

  @Get(':id')
  obterTicket(@Param() params): string {
    return `Retorna os dados do ticket ${params.id}`
  }

  @Post()
  criarTicket(@Body() ticket): string {
    return 'Ticket criado'
  }

  @Put()
  atualizarTicket(@Body() ticket): string {
    return 'Ticket atualizado'
  }

  @Put(':id')
  closedTicket(@Body() ticket, @Param() params): string {
    return `Ticket ${params.id} fechado`
  }
}
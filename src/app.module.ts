import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets.controller';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, TicketsController],
  providers: [AppService],
})
export class AppModule {}

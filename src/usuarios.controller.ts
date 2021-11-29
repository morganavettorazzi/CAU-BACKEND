import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { atendente } from "./atendente.model";
import { Usuario } from "./usuario.model";

@Controller('usuarios')
export class UsuariosController {
  atendentes: atendente[] = [
    new atendente(2990,"Morgana Vettorazzi", "Morgana.vettorazzi@gmail.com", "morg001")
  ]

  usuarios: Usuario[] = [
    new Usuario(2991,"Usuario externo", "usuario@gmail.com")
  ]

  @Get()
  obterTodosUsuarios(): Usuario[] {
    return this.usuarios;
  }

  @Get()
  obterTodosAtendentes(): atendente[] {
    return this.atendentes;
  }

  @Get(':id')
  obterUmUsuario(@Param() params): string {
    return `Retorna os dados do usuário ${params.id}`
  }

  @Get(':atendente')
  obterAtendente(@Param() params): string {
    return `Retorna os dados do atendente ${params.atendente}`
  }

  @Post()
  criarUsuario(@Body() usuario): string {
    return 'Usuário criado'
  }

  @Put()
  atualizarUsuario(@Body() usuario): string {
    return 'Usuário criado'
  }
}
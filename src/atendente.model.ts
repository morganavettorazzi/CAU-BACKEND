import { Usuario } from "./usuario.model";

export class atendente extends Usuario {
  login: string

  constructor(id: number, nome: string, email: string, login: string) {
    super(id, nome, email)
    this.login = login
  }
}
import { Usuario } from "./user.models"

export interface Post {
  id: number,
  content: string,
  user: Usuario
}

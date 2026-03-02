import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario }  from './models/user.models';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Rankeando');

  public usuario: Usuario;
  public post: Post;

  constructor(private http: HttpClient) {
    this.usuario = {
      nombre: 'Saúl',
      email: '',
      age: 20,
      itsAdmin: false
    };
    this.post = {
      id: 1,
      content: 'Hola, este es mi primer post',
      user: this.usuario
    };
    console.log(this.usuario);
  }
}

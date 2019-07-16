import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eje02';
  public posts;

  constructor() {
    this.posts = [
      {
        name: "Aplicciones emppresariales",
        id: 1,
        description: "Teoria sobre Mongo",
        img: "http://jarboleya.files.wordpress.com/2008/05/ma-musique.png",
        rank: 5
      },
      {
        name: "Ecuaciones diferenciales",
        id: 2,
        description: "Aplicaciones de ecuaciones",
        img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/laplace_transform.png-dd1669-128c.png",
        rank: 5
      },
      {
        name: "Sistemas programables",
        id: 3,
        description: "Programacion con PIC",
        img: "https://es.industryarena.com/files/i/149/509/f9e313e32439c624bae6daa7bb3e38ca_MW_300_.jpg",
        rank: 1
      },
      {
        name: "Lenguajes y automatas 1",
        id: 4,
        description: "Creacion de Analisis lexico y sintactico",
        img: "http://www.elclubdelaprogramacion.com/wp-content/uploads/2016/08/programacion-basica.jpg",
        rank: 1
      }
    ]
  }

  ngOnInit() {

  }


}

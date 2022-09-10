import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alura-pic';

  photos = [
    {
      url:'https://www.infoescola.com/wp-content/uploads/2010/06/tigre-de-bengala-60322900.jpg',
      description:'tigre',
    },
    {
      url:'https://static.todamateria.com.br/upload/le/ao/leaojuba-cke.jpg',
      description:'leao',
    },
    {
      url:'https://www.infoescola.com/wp-content/uploads/2010/06/tigre-de-bengala-60322900.jpg',
      description:'tigre',
    },
    {
      url:'https://static.todamateria.com.br/upload/le/ao/leaojuba-cke.jpg',
      description:'leao',
    }
  ]
}

import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';
  list: any = [];
  addItem(item: any){
    console.log(item.length);
    if(item.length == "0"){
      alert('Por favor, digite o nome da Tarefa antes de enviar!');
      return false;
    }
    this.list.push(new Tarefa(item));
    return true;
  }
}


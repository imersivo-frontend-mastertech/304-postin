import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  entrada = '';

  atividades = [];

  constructor(){
    let dadosEmString = localStorage.getItem('dados');

    if(dadosEmString){
      this.atividades = JSON.parse(dadosEmString);
    }
    
  }

  inserir(){
    if(this.entrada != ''){
      this.atividades.push(this.entrada);
      this.entrada = '';
    }

    let dadosEmString = JSON.stringify(this.atividades);

    localStorage.setItem('dados', dadosEmString);
    
    console.log(this.atividades);
  }

  limpar(){
    this.atividades = [];
    localStorage.removeItem('dados');
  }
}

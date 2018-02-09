import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {
  @Input() texto;

  constructor() { }

  ngOnInit() {
  }

}

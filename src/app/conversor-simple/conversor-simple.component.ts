import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor-simple',
  templateUrl: './conversor-simple.component.html',
  styleUrls: ['./conversor-simple.component.css']
})
export class ConversorSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  FACTOR_CONVERSION = 1.609344;
  kilometros = 1;
  millas = 0;

  convertir​() {
    this​.kilometros =  this.millas* this.FACTOR_CONVERSION;
  }

  entradaDeMillas(evento: KeyboardEvent) {
    this.millas = Number((<HTMLInputElement>evento.target).value);
    console.log(this.millas);
  }
}

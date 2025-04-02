import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonList, IonItem, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { Circulo } from '../calculoperimetro/calcularperimetro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-figura-circulo',
  templateUrl: './figura-circulo.component.html',
  styleUrls: ['./figura-circulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCardHeader, CommonModule, IonCard, IonList, IonItem, IonInput, IonButton, FormsModule, IonCardTitle, IonCardSubtitle, IonCardContent]

})
export class FiguraCirculoComponent implements OnInit {
  perimetroStr: string = '';
  resultado: string = '';

  constructor() {}

  ngOnInit() {}

  calcularPerimetro() {
    const radio = parseFloat(this.perimetroStr);
    if (!isNaN(radio) && radio > 0) {
      const circulo = new Circulo('Círculo', radio);
      const perimetro = circulo.calcularPerimetro();
      this.resultado = `El perímetro es: ${perimetro.toFixed(2)} cm.`;
    } else {
      this.resultado = 'Por favor, ingresa un valor válido para el radio.';
    }
  }
}
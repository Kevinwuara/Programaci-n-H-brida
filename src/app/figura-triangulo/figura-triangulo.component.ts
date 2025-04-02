import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonList, IonItem, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../calculoperimetro/calcularperimetro';

@Component({
  selector: 'app-figura-triangulo',
  templateUrl: './figura-triangulo.component.html',
  styleUrls: ['./figura-triangulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCardHeader, CommonModule, IonCard, IonList, IonItem, IonInput, IonButton, FormsModule, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class FiguraTrianguloComponent implements OnInit {
  ladoA: string = '';
  ladoB: string = '';
  ladoC: string = '';
  resultado: string = '';

  constructor() {}

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = parseFloat(this.ladoA);
    const ladoB = parseFloat(this.ladoB);
    const ladoC = parseFloat(this.ladoC);

    if (!isNaN(ladoA) && ladoA > 0 && !isNaN(ladoB) && ladoB > 0 && !isNaN(ladoC) && ladoC > 0) {
      const trianguloEscaleno = new TrianguloEscaleno('Triángulo Escaleno', ladoA, ladoB, ladoC);
      this.resultado = `El perímetro es: ${trianguloEscaleno.calcularPerimetro().toFixed()} cm.`;
    } else {
      this.resultado = 'Por favor, ingresa valores válidos para todos los lados.';
    }
  }
}
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail} from '@ionic/angular/standalone';
import { FiguraCirculoComponent } from "../figura-circulo/figura-circulo.component";
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';
import { FiguraTrianguloComponent } from '../figura-triangulo/figura-triangulo.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FiguraTrianguloComponent, IonHeader, IonToolbar, IonContent, FiguraCirculoComponent, IonSelect, IonSelectOption, CommonModule]
})
export class HomePage {
  figuraGeometrica:string = ""
  
  constructor() {}

  esfiguraCirculo() {return this.figuraGeometrica === "circulo"}
  esfiguraTriangulo() {return this.figuraGeometrica === "triángulo";
  }

  manejarSeleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.figuraGeometrica = $event.detail.value;
  }
}
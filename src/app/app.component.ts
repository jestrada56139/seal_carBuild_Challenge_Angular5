import { Component } from '@angular/core';
import * as builtCar from './car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCar = [];
  car: any;
  color: string;
  model: any;
  doors: string;
  mpg: any;

  buildCar() {
    this.car = {
      newDoors: this.doors,
      newMpg: this.mpg,
      newModel: this.model,
      newColor: this.color
    };
    const userCar = new builtCar.Car(this.car);
    this.newCar.push(userCar);
  }

}

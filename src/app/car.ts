export class Car {
    doors: any;
    color: string;
    model: string;
    mpg: any;

     constructor(labelledObj: buildCar) {
        this.doors = labelledObj.newDoors;
        this.color = labelledObj.newColor;
        this.model = labelledObj.newModel;
        this.mpg = labelledObj.newMpg;
     }
}

export interface buildCar {
    newDoors: string;
    newColor: string;
    newModel: any;
    newMpg: any;
}


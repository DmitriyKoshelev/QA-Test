function CarObsolite(engineVolume, color, productionYear) {
    this.engineVolume = engineVolume;
    this.productionYear = productionYear;   
    this.color = color;

    this.drive = function() {
        console.log('Driveng....')

 }

 this.break = function() {
        console.log('Breaking....')
    }

    this.startEngine = function() {
        console.log(`Engine started ${this.engineVolume}...`)  
    }

    this.slowBreak = function() {
        console.log('Slowly stoping car...')
    }
};

    // const car = new Car(2.0, 'red', 2020);
    // const car2 = new Car(3.0, 'blue', 2021);
    // const car3 = new Car(1.5, 'green', 2019);



    // car.startEngine();
    // car.drive();
    // car.slowBreak();


class Car {
    constructor(engineVolume: string, color: string, productionYear: number) {
        this.engineVolume = engineVolume;
        this.productionYear = productionYear;
        this.color = color;
    
    }
    engineVolume: string;
    productionYear: number;   
    color: string;

    drive() {
        console.log('Driveng....')

}

    break() {
        console.log('Breaking....')
    }

    startEngine() {
        console.log(`Engine started ${this.engineVolume}...`)  
    }

    slowBreak() {
        console.log('Slowly stoping car...')
    }     

} 

const car4 = new Car('2.0', 'red', 2020);

car4.startEngine();
car4.drive();
car4.slowBreak();
car4.break();

console.log(car4.engineVolume);
console.log(car4.productionYear);
console.log(car4.color);











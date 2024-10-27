import Car from './Car.js';
import generateRandomNumber from './GenerateRandomNumber.js';
import Output from '../io/Output.js';

class CarController {
  constructor(carNames) {
    this.cars = [];
    this.createCar(carNames);
  }

  createCar(carNames) {
    carNames.forEach((name) => this.cars.push(new Car(name)));
  }

  updateCarPosition() {
    this.cars.forEach((car) => car.moveForward(generateRandomNumber()));
  }

  printResult() {
    this.cars.forEach((car) => Output.printResult(car.name, car.generateRaceMarker()));
    Output.printNewLine();
  }

  getWinner() {
    const winnerArray = this.getCarWithMaxPosition([...this.cars]);
    Output.printWinner(winnerArray);
  }

  getCarWithMaxPosition(cars) {
    const winners = [];
    let maxCount = cars[0].moveCount;

    cars.forEach((car) => {
      if (car.moveCount > maxCount) maxCount = car.moveCount;
    });
    cars.forEach((car) => {
      if (car.moveCount === maxCount) winners.push(car.name);
    });

    return winners;
  }
}
export default CarController;

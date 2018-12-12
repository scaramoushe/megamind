import { NumericUtils } from "./NumericUtils";

export class NumbersModel {
  blocks = [];
  history = [];
  types = ["arabic", "latin", "word"];
  colors = ["red", "blue", "green"];
  params = ["number", "type", "color"];
  interval = null;
  isRunning = false;

  constructor(blocksNum, speed, callback) {
    for (let i = 0; i < blocksNum; i++) {
      this.blocks[i] = this.generate();
    }
    callback(this.blocks);
    this.interval = setInterval(() => {
      this.blocks[
        NumericUtils.getRandomInt(0, blocksNum - 1)
      ] = this.generate();
      callback(this.blocks);
    }, speed * 1000);
    this.isRunning = true;
  }

  stop() {
    clearInterval(this.interval);
    this.isRunning = false;
    return this.history;
  }

  generateQuestion(complexity) {
    let temp = {
      number: this.randomNumber(),
      type: this.randomType(),
      color: this.randomColor()
    };
    let result = {};
    let param = null;
    switch (complexity) {
      case 1:
        param = this.randomParam();
        result[param] = temp[param];
        break;
      case 2:
        param = this.randomParam();
        result = temp;
        delete result[param];
        break;
      case 3:
        result = temp;
        break;
    }
    return {
      q: result,
      a: this.history.filter(i =>
        this.params.every(p => (result[p] ? i[p] === result[p] : true))
      ).length
    };
  }

  randomParam() {
    return this.params[NumericUtils.getRandomInt(0, 2)];
  }

  randomNumber() {
    return NumericUtils.getRandomInt(1, 10);
  }

  randomColor() {
    return this.colors[NumericUtils.getRandomInt(0, 2)];
  }

  randomType() {
    return this.types[NumericUtils.getRandomInt(0, 2)];
  }

  generate() {
    let item = {
      number: this.randomNumber(),
      type: this.randomType(),
      angle: NumericUtils.getRandomInt(-20, 20),
      color: this.randomColor()
    };
    this.history.push(item);
    return item;
  }
}

// export class Block{
// 	setNumber
// }

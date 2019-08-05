class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {}
  splitClick() {}
}

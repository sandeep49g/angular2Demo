import { Injectable } from '@angular/core';

@Injectable()
export class RandomColorsService {

  constructor() { }

  generateRandomColor() {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomColor() {
    let colors: Array<string> = [];
    let color: string = this.generateRandomColor();
    while (colors.includes(color)) {
      color = this.generateRandomColor();
    }
    return color;
  }

}

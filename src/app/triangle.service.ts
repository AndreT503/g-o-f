import { Injectable } from '@angular/core';

@Injectable()

export class TriangleService {

  private static startOfAlphabet = 97;

  constructor() { }
  /**
   * generate floyd triangles
   * odd
   * even
   */

   public floydTriangle(rows: number): string {
    let currentLetter = TriangleService.startOfAlphabet;
    let resultString = '';

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < i; j++) {
        resultString += String.fromCharCode(currentLetter) + ' ';
        currentLetter++;
      }
      resultString += '\n\r';
    }
    return resultString;
}

public evenFloydTriangle(rows: number): string {
  let currentLetter = TriangleService.startOfAlphabet;
  let resultString = '';

  for (let i = 0; i < rows; i++) {

    for (let j = 0; j <= (rows - i - 2); j++) {
      resultString +=  ' ';
    }
    for (let j = 0; j <= i; j++) {
      resultString += String.fromCharCode(currentLetter) + ' ';
      currentLetter++;
    }
    resultString += '\n\r';
  }
  return resultString;
}
}

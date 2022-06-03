import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.css'],
})
export class WordCounterComponent implements OnInit {
  public text: string = '';
  public amountOfChars: number = 0;
  public amountOfWords: number = 0;

  constructor() {}

  public getText(text: string) {
    this.text = text;
    this.amountOfChars = text.length;
    if (this.text.split(' ')[0] === '' && this.text.split(' ').length === 1) {
      this.amountOfWords = 0;
    } else {
      this.amountOfWords = this.text.split(' ').length;
    }
  }

  ngOnInit() {}
}

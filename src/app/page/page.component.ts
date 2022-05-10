import { Component, OnInit } from '@angular/core';
import { contents } from '../contents';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  contents = contents;
  color = '';
  constructor() {}

  ngOnInit(): void {}

  handleUpdate(color: string) {
    this.color = color;
  }
}

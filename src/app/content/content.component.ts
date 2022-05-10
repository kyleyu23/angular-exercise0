import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Content } from '../contents';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() content!: Content;
  @Output() updateColor = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

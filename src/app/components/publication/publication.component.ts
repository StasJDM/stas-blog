import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {
  @Input() text: string = '';
  @Input() date: string = '';
  @Input() author: string = '';

  constructor() {}

  ngOnInit(): void {}
}

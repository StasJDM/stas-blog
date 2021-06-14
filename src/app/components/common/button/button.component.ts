import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() isDisabled = false;

  @Output() click = new EventEmitter();

  onClick(event: Event): void {
    console.log(event);
    this.click.emit(event);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Paragraph {
  title: string;
  body: string;
  color: string;
}

@Component({
  selector: 'app-color-tiles',
  templateUrl: './color-tiles.component.html',
  styleUrls: ['./color-tiles.component.scss']
})
export class ColorTilesComponent {
  @Input() section!: Paragraph;
  @Input() selectedColor!: String;
  @Output() colorChange = new EventEmitter<string>();

  onClick(): void {
    this.colorChange.emit(
      this.selectedColor === this.section.color ? '' : this.section.color
    );
  }
}

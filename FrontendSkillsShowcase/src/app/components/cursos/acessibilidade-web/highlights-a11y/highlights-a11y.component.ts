import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights-a11y',
  standalone: true,
  imports: [NgClass],
  templateUrl: './highlights-a11y.component.html',
  styleUrl: './highlights-a11y.component.scss'
})
export class HighlightsA11yComponent {

  modal: boolean = false;

  abriModal(): void {
    this.modal = true;
  }

  fechaModal(): void {
    this.modal = false;
  }
}

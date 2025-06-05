import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.scss'
})
export class Page3Component {
  attempts = 0;
  noButtonOffset = { x: 0, y: 0 };
  
  constructor(private router: Router) {}
  
  moveNoButton() {
    this.attempts++;
    
    // Generate random offset within a reasonable range to avoid scrollbars
    const maxOffset = 150;
    
    this.noButtonOffset = {
      x: (Math.random() - 0.5) * maxOffset,
      y: (Math.random() - 0.5) * maxOffset
    };
  }
  
  sayYes() {
    this.router.navigate(['/success']);
  }

}

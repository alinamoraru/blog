import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>Basic Buttons</h3>
  <div class="example-button-row">
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
    <a mat-button routerLink=".">Link</a>
  </div>
  
  <h3>Raised Buttons</h3>
  <div class="example-button-row">
    <button mat-raised-button>Basic</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button routerLink=".">Link</a>
  </div>
  
  <h3>Stroked Buttons</h3>
  <div class="example-button-row">
    <button mat-stroked-button>Basic</button>
    <button mat-stroked-button color="primary">Primary</button>
    <button mat-stroked-button color="accent">Accent</button>
    <button mat-stroked-button color="warn">Warn</button>
    <button mat-stroked-button disabled>Disabled</button>
    <a mat-stroked-button routerLink=".">Link</a>
  </div>
  
  <h3>Flat Buttons</h3>
  <div class="example-button-row">
    <button mat-flat-button>Basic</button>
    <button mat-flat-button color="primary">Primary</button>
    <button mat-flat-button color="accent">Accent</button>
    <button mat-flat-button color="warn">Warn</button>
    <button mat-flat-button disabled>Disabled</button>
    <a mat-flat-button routerLink=".">Link</a>
  </div>
  
  <h3>Icon Buttons</h3>
  <div class="example-button-row">
    <button mat-icon-button>
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button color="primary">
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button color="accent">
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button color="warn">
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button disabled>
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
  </div>
  
  <h3>Fab Buttons</h3>
  <div class="example-button-row">
    <button mat-fab>Basic</button>
    <button mat-fab color="primary">Primary</button>
    <button mat-fab color="accent">Accent</button>
    <button mat-fab color="warn">Warn</button>
    <button mat-fab disabled>Disabled</button>
    <button mat-fab>
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <a mat-fab routerLink=".">Link</a>
  </div>
  
  <h3>Mini Fab Buttons</h3>
  <div class="example-button-row">
    <button mat-mini-fab>Basic</button>
    <button mat-mini-fab color="primary">Primary</button>
    <button mat-mini-fab color="accent">Accent</button>
    <button mat-mini-fab color="warn">Warn</button>
    <button mat-mini-fab disabled>Disabled</button>
    <button mat-mini-fab>
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <a mat-mini-fab routerLink=".">Link</a>
  </div>  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}

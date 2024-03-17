import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderContentComponent } from './content/header/header-content/header-content.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TranslateModule, RouterOutlet, HeaderContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'travel-app';
  constructor(public translate: TranslateService) {

  }
}

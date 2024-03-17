import { Component } from '@angular/core';
import { LangIconComponent } from '../lang-icon/lang-icon.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-icons',
  standalone: true,
  imports: [LangIconComponent, TranslateModule],
  templateUrl: './header-icons.component.html',
  styleUrl: './header-icons.component.scss'
})
export class HeaderIconsComponent {

}

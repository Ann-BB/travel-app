import { Component } from '@angular/core';
import { HeaderListComponent } from '../header-list/header-list.component';
import { HeaderIconsComponent } from '../header-icons/header-icons.component';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [HeaderListComponent, HeaderIconsComponent],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {

}

import { Component } from '@angular/core';
import { HedaerList } from '../../../models/hedaer-list';

@Component({
  selector: 'app-header-list',
  standalone: true,
  imports: [],
  templateUrl: './header-list.component.html',
  styleUrl: './header-list.component.scss'
})
export class HeaderListComponent {

  // headerList: HedaerList[] = [
  //   {
  //     "title": "place",
  //     "section": ["kakheti", "tbilis"]
  //   }
  // ]
  headerList: string[] =[]
}

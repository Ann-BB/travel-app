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

  headerList: HedaerList[] = [
    {
      title: "why",
      section: {
        listName: ["Header 1", "Header 2"],
        imgList: ["Header 3", "Header 4"]
      }
    }
  ]
  // headerList: string[] =[]
}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { MaterialModule } from '../../module/material/material.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-icon',
  standalone: true,
  imports: [CommonModule, TranslateModule,  MaterialModule, TranslateModule],
  templateUrl: './lang-icon.component.html',
  styleUrl: './lang-icon.component.scss'
})
export class LangIconComponent {
  languageOptionsVisible: boolean = false;
  currentLanguage: string | undefined;
  effectiveLang: string | undefined; 
  
  private languageMap: { [key: string]: string } = {
    en: 'En',
    ja: 'Geo', 
  };

  constructor(public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    const browserLang = this.translate.getBrowserLang();
    this.effectiveLang = browserLang?.match(/en|ka/) ? browserLang : 'en'

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('userLanguage');
      this.effectiveLang = savedLang || (browserLang?.match(/en|ka/) ? browserLang : 'en');

    }

    this.translate.use(this.effectiveLang);
    this.currentLanguage = this.languageMap[this.effectiveLang] || 'En';
  }

 

  @HostListener('document:click', ['$event'])
  clickOutside(event: any): void {
    if (!event.target.closest('.language-selection')) {
      this.languageOptionsVisible = false;
    }
  }

  toggleLanguageOptions(): void {
    this.languageOptionsVisible = !this.languageOptionsVisible;
  }

  selectLanguage(language: string, languageText: string): void {
    this.currentLanguage = languageText;
    this.toggleLanguageOptions();
    this.translate.use(language);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('userLanguage', language);
    }
  }
}

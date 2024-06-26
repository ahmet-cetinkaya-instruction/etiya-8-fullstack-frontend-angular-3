import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SingleFocusLayoutComponent } from './shared/components/single-focus-layout/single-focus-layout.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, SingleFocusLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.setCurrentLang();
  }

  setCurrentLang() {
    this.translateService.addLangs(['en', 'tr']);
    let language = this.translateService.defaultLang;

    const userPreferredLang: string | null = localStorage.getItem(
      'user_preferred_lang'
    );
    const userBrowserLang: string | null =
      this.translateService.getBrowserLang() ?? null;
    if (userPreferredLang) language = userPreferredLang;
    else if (userBrowserLang) language = userBrowserLang;

    this.translateService.use(language);
  }
}

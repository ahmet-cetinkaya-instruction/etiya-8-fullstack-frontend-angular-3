import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SingleFocusLayoutComponent } from '../../../shared/components/single-focus-layout/single-focus-layout.component';
import { LoginFormComponent } from '../../../features/auth/components/login-form/login-form.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    SingleFocusLayoutComponent,
    LoginFormComponent,
    TranslateModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    // this.translateService.use('tr');
  }
  // getCurrentLanguage() {
  //   // this.translateService.get(["common_welcome"]).subscribe((translations) => {})
  // }

  get academyLogo() {
    if (this.translateService.currentLang === 'tr')
      return 'assets/images/Akademi Logo-tr.png';

    return 'assets/images/Akademi Logo-en.png';
  }
}

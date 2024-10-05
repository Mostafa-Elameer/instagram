import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLayoutComponent, AuthLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'social_Media';
}

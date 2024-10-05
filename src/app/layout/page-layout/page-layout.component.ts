import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageNavbarComponent } from "../../allComponents/page-navbar/page-navbar.component";

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [RouterOutlet, PageNavbarComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {

}

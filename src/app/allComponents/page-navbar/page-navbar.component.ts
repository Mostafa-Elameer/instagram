import { Component, inject } from '@angular/core';
import { UsersService } from '../../sheard/servises/users/users.service';
import { Event, NavigationEnd, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-page-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-navbar.component.html',
  styleUrl: './page-navbar.component.scss'
})
export class PageNavbarComponent {


  readonly _UsersService = inject(UsersService)
  constructor(private router: Router) { }


  _userId: any


  ngOnInit(): void {

    this._UsersService.JWT()
    this._userId = this._UsersService.userToken

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });

  }





}

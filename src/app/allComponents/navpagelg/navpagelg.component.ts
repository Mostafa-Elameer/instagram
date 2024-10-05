import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Event, Router, RouterLink } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { CreatepostComponent } from "../createpost/createpost.component";
import { UsersService } from '../../sheard/servises/users/users.service';
import { SearchComponent } from "../search/search.component";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-navpagelg',
  standalone: true,
  imports: [CreatepostComponent, RouterLink, SearchComponent],
  templateUrl: './navpagelg.component.html',
  styleUrl: './navpagelg.component.scss'
})
export class NavpagelgComponent {



  readonly _UsersService = inject(UsersService)
  constructor(private router: Router) { }
  _userId: any

  ngOnInit() {
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

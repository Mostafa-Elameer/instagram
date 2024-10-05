import { Component, inject } from '@angular/core';
import { FackusersService } from '../../sheard/servises/fackusers.service';

@Component({
  selector: 'app-rightside',
  standalone: true,
  imports: [],
  templateUrl: './rightside.component.html',
  styleUrl: './rightside.component.scss'
})
export class RightsideComponent {

  private readonly _FackusersService = inject(FackusersService)
  userData: any[] = []

  ngAfterContentInit(): void {
    this._FackusersService.gitStories().subscribe({
      next: (res) => {
        this.userData = res.users
      }
    })
  }



}

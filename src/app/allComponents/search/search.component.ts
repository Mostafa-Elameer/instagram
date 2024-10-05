import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FackusersService } from '../../sheard/servises/fackusers.service';
import { SearchPipe } from '../../sheard/pipes/search.pipe';
import { ifackUser } from '../../sheard/interfaces/fackuser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, SearchPipe , RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  name: string = ''

  _allUsers: ifackUser[] = []
  private readonly _FackusersService = inject(FackusersService)

  ngOnInit(): void {
    this._FackusersService.gitStories().subscribe({
      next: (res) => {
        this._allUsers = res.users
      }
    })
  }
}

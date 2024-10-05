import { Component, inject } from '@angular/core';
import { OnePostComponent } from "../one-post/one-post.component";
import { NavpagelgComponent } from "../navpagelg/navpagelg.component";
import { RightsideComponent } from "../rightside/rightside.component";
import { StoriesComponent } from "../stories/stories.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OnePostComponent, NavpagelgComponent, RightsideComponent, StoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  

}

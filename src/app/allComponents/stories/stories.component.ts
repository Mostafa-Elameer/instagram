import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FackusersService } from '../../sheard/servises/fackusers.service';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss'
})
export class StoriesComponent {


  _stories: any[] = []
  private readonly _FackusersService = inject(FackusersService)
  customStories: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplayTimeout: 2000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 6
      },
      740: {
        items: 8
      },
    },
  }


  ngOnInit(): void {
    this._FackusersService.gitStories().subscribe({
      next: (res) => {
        this._stories = res.users
      }
    })
  }




}

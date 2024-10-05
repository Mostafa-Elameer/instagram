import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpagelgComponent } from './navpagelg.component';

describe('NavpagelgComponent', () => {
  let component: NavpagelgComponent;
  let fixture: ComponentFixture<NavpagelgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavpagelgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavpagelgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

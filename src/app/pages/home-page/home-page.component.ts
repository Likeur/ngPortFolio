import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransitionpageComponent } from '../../components/transitionpage/transitionpage.component';
import { gsap } from 'gsap';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule,  TransitionpageComponent],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent {

  ngOnInit(){
    setTimeout(() => {
      const texts = document.querySelectorAll('.text-anime')
      const tl = gsap.timeline()

      tl.from(texts, {
        opacity:0,
        y: 20,
        rotate: -5,
        stagger: 0.3
      }).to(texts, {
        opacity: 1,
        y:0,
        rotate: 0,
        duration: 1,
        stagger: 0.3
      })
    }, 5);
  }
}

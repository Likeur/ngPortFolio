import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransitionpageComponent } from '../../components/transitionpage/transitionpage.component';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TransitionpageComponent],
  templateUrl: './about.component.html',
  styles: ``
})
export default class AboutComponent {

  // ngOnInit(){
  //   const boxes = document.querySelectorAll('.box')
  //   const tl = gsap.timeline()

  //   tl.from(boxes, {
  //     height: '100%',
  //   }).to(boxes ,{
  //     height: '0',
  //     stagger: 0.2,
  //     duration: 0.6,
  //   })
  // }
}

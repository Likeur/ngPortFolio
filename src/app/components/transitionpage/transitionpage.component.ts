import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap'
@Component({
  selector: 'app-transitionpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transitionpage.component.html',

})
export class TransitionpageComponent {

  ngOnInit(){
    // const boxes = document.querySelectorAll('.box')
    // const tl = gsap.timeline()

    // tl.from(boxes, {
    //   height: '100%',
    // }).to(boxes ,{
    //   height: '0',
    //   stagger: 0.2,
    //   duration: 0.6,
    // })
  }
  
}

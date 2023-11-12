import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

    navLinks = [
      {
        id: 1,
        title : 'home',
        route : '/home'
      },
      {
        id: 2,
        title : 'About',
        route : '/about'
      },
      {
        id: 3,
        title : 'Work',
        route : '/work'
      },
      {
        id: 4,
        title : 'Skills',
        route : '/skills'
      },
      {
        id: 5,
        title : 'Contact',
        route : '/contact'
      },
    ]

    openMenu(){
      const menuLinks = document.querySelector('#menuLinks')!
      const btnMenu = document.querySelector('#btn-menu')!


      menuLinks.classList.toggle('translate-x-[100rem]')
      btnMenu.classList.toggle('bg-blue-600')
      btnMenu.classList.toggle('rotate-45')
    }

    isDarkmode(){
      function darkmode(){
        const darkMode = document.querySelector('#darkmode')!
        const darkModeIcon = document.querySelector('#darkmodeicon')!
  
        document.documentElement.classList.toggle('dark')
        darkMode.classList.toggle('rotate-45')
        if (document.documentElement.className == 'dark'){
            darkModeIcon.className = 'bx bx-sun'
        } else{
            darkModeIcon.className = 'bx bx-moon'
        }
      }
  
      darkmode()
    }
}

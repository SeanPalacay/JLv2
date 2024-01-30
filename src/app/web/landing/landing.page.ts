import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Header
    const headerBurger = document.querySelector('.header__burger') as HTMLDivElement;
    const headerMenu = document.querySelector('.header__menu') as HTMLDivElement;
    headerBurger.addEventListener('click', (e: MouseEvent) => {
        headerMenu.classList.toggle('active');
        headerBurger.classList.toggle('active');
    });

    // Display page on full load
    const body = document.body;
    window.addEventListener('DOMContentLoaded', (e: Event) => {
        body.style.display = 'block';
    });

    // Scroll to specific blocks
    const aboutCompanyBlock = document.querySelector('.aboutcompany') as HTMLDivElement;
    const aboutLink = document.querySelector('.header__link.about') as HTMLAnchorElement;
    const businessBlock = document.querySelector('.sixthscreen') as HTMLDivElement;
    const businessLink  = document.querySelector('.header__link.business') as HTMLAnchorElement;
    const contactBlock = document.querySelector('.eighthscreen') as HTMLDivElement;
    const contactLink  = document.querySelector('.header__link.contact') as HTMLAnchorElement;
    const allHeaderLinks = document.querySelectorAll('.header__link') as NodeListOf<HTMLAnchorElement>;

    function scrollToElement(e: MouseEvent, block: HTMLDivElement) {
      e.preventDefault();
      if (window.innerWidth < 768) {
        headerMenu.classList.remove('active');
        headerBurger.classList.remove('active');
      }
      allHeaderLinks.forEach(link => link.classList.remove('active'));
      (e.target as HTMLAnchorElement).classList.add('active');
      const goToBlock = block.getBoundingClientRect().top + window.scrollY - document.querySelector('header')!.offsetHeight;
      window.scrollTo({
        top: goToBlock,
        behavior: "smooth"
      });
    }

    if (aboutLink && aboutCompanyBlock) {
      aboutLink.addEventListener('click', (e) => scrollToElement(e, aboutCompanyBlock));
  }
    if (businessLink && businessBlock) {
      businessLink.addEventListener('click', (e) => scrollToElement(e, businessBlock));
    }
    if (contactLink && contactBlock) {
      contactLink.addEventListener('click', (e) => scrollToElement(e, contactBlock));
    }

    // Up Button
    const upBtn = document.querySelector('.up') as HTMLDivElement;
    if (upBtn) {
      window.addEventListener('scroll', (e: Event) => {
        if (window.scrollY > 400) upBtn.style.bottom = '10px';
        else upBtn.style.bottom = '-50px';
      });
      upBtn.addEventListener('click', (e: MouseEvent) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }

    // Animation on Scroll
    const animItems = document.querySelectorAll('.anim__items') as NodeListOf<HTMLDivElement>;

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
    
        function animOnScroll() {
          for (let i = 0; i < animItems.length; i++) {
              let animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offSet(animItem).top;
                const animStart = 4;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                } else {
                    if (!animItem.classList.contains('anim-no-hide')) {
                        animItem.classList.remove('active');
                    }
                }
            }
        }
    
        function offSet(el: HTMLElement) {
            const rect = el.getBoundingClientRect(),
                  scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                  scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
    
        setTimeout(() => {
            animOnScroll();
        }, 300); // Lowering the timeout to ensure quick visibility
    }
  }
}

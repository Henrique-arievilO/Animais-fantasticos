const activeClass = 'active';

//Função pra linkar as imagens nas respectivas seções;

function tabNavigation () {
  const tabMenu = document.querySelectorAll('.js-tabMenu li');
  const tabContent = document.querySelectorAll('.js-tabContent section');
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);
  
    function activeTab (index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      })
      tabContent[index].classList.add(activeClass);
    };
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  };
}
tabNavigation();

function navFaqList () {
  const accordionList = document.querySelectorAll('.js-accordionList dt');
  if(accordionList.length) {
  
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.toggle(activeClass);
    
    function activeAccordion () {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
navFaqList();

function smoothScroll () {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scrollToSection (event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
  
    section.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'start',
      }
    );
  }
  internalLinks.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}
smoothScroll();

function scrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  
  if(sections.length){
    const halfWindow = window.innerHeight * 0.75;
    
    function animateScrolling() {
      sections.forEach((section) => {
        const topSection = section.getBoundingClientRect().top;
        const sectionVisible = (topSection - halfWindow) < 0;
        if(sectionVisible) {
          section.classList.add(activeClass);
        } else {
          section.classList.remove(activeClass);
        };
      })
    }
    animateScrolling();
    
    window.addEventListener('scroll', animateScrolling)
  }
}
scrollAnimation();

function scrollTop() {
  const topButton = document.querySelector('.topButton');

  function showButton (event) {
    if(window.innerHeight <= 0) {
      topButton.classList.remove(activeClass);
    }else{
      topButton.classList.add(activeClass);
    }
  }
  document.addEventListener('scroll', showButton);

  
  function hideButton (event) {
    if (event.deltaY < 0) {
      var topButton = document.querySelector('.topButton');
      topButton.classList.remove(activeClass);
    }
  }
  document.addEventListener('wheel', hideButton);
  function backToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  topButton.addEventListener('click', backToTheTop);
}
scrollTop();


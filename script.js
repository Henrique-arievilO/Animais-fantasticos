//Função pra linkar as imagens nas respectivas seções;
function tabNavigation () {
  console.log('teste');
}
tabNavigation();

const tabMenu = document.querySelectorAll('.js-tabMenu li');
const tabContent = document.querySelectorAll('.js-tabContent section');
const activeClass = 'active';

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
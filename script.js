const tween = KUTE.fromTo(
  '#blob1',
  {path:'#blob1'},
  {path:'#blob2'},
  {repeat:999, duration:3000,yoyo:true}
  
)

tween.start()

const togglebtn = document.getElementsByClassName('toggle-button')[0];
const navbarlinks =document.getElementsByClassName('navbar-links')[0];

const topOfNav = navbarlinks.offsetTop;
togglebtn.addEventListener('click',() =>{
  
  navbarlinks.classList.toggle('active')
  
  
});
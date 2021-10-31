/* see https://codepen.io/m3g4p0p/pen/mdegmgO
for a more complete version via @m3g4p0p at Sitepoint Forums
*/

let root = document.documentElement;
const section1 = document.querySelector('.header')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset); 
   root.style.setProperty('--gradient-percent', y * 3 + "px");
  console.log(y)
})

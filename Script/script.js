//Hamburger navbar icon
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerToggler = document.getElementById("hamburger-icon");
  console.log(hamburgerToggler.classList);
  hamburgerBtn.addEventListener("click", () => {
    console.log(hamburgerToggler.classList);
      hamburgerToggler.classList.toggle("active");
  });    
});

//Theme change
const changeThemebtn=document.getElementById('changeTheme');
var colorcss=document.getElementById('colorcss')
const styles=['green','purple','blue'];
var index=0;
var styleslength=styles.length;
changeThemebtn.addEventListener("click" , function() {
  var clr=styles[index];
  colorcss.href='CSS/'+clr+'.css';
  index++;
  if (index == styleslength) {
    index=0;
  }
});

//Making footer marquee in mobile view
document.addEventListener("DOMContentLoaded", function() {
  function isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
  }
  const footer = document.getElementById('footer-text')
  if (isMobile()) {
      const marquee = `<marquee>${footer.innerHTML}</marquee>`;
      footer.innerHTML = marquee;
  }
});

//Hiding and displaying reach-top arrow
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}


const hero= document.querySelector('.bgimg-1');
//const slider= document.querySelector('.slider');
//const logo= document.querySelector('#logo');
//const headline= document.querySelector('headline');
const tl = new TimelineMax();
tl.fromTo(hero,1.5,{height:"0%"}, {height:"90%", ease: Power2.easeInOut})
.fromTo(hero,1.5,{width:"80%"}, {width:"100%", ease: Power2.easeInOut });

function fn1()
{
  let rd1=document.getElementById("rd1");
  let rd2=document.getElementById("rd2");
 
  

 

  if (rd1.checked == true) alert("You are not alkaline Ready!");
  else if (rd2.checked == true) alert("You are alkaline ready!");
  else alert("no channel selected");
}
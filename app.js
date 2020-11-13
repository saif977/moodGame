const el=document.querySelectorAll(".el");
const bg=document.querySelector(".bg");
const cnfrm=document.querySelector(".confirm");
const yes=document.querySelector(" .confirm span:first-of-type");
const no=document.querySelector(" .confirm span:last-child");
const fo=document.querySelector(".fo");
const points=document.querySelector(".points");

let count=0;

const getnum=()=>parseInt(Math.random()*10);

const yesf=()=>{
    points.textContent=`POINTS : ${count}`;
    points.style.textAlign="end";
    cnfrm.style.display="none";
    bg.style.display="none";
    el.forEach((i)=>i.className="el");
}

const nof=()=>{
    console.log("no");
    cnfrm.style.display="none";
    fo.style.display="block";
}

const gameOn=(i)=>{
    i.className='gon';
    ++count;
    points.textContent=`POINTS : ${count}`;
    points.style.textAlign="center";
}

const gameOff=(i)=>{
    count=0;
    i.className='gof';
    bg.style.display="block";
    cnfrm.style.display="block";
  
}

const check=(i)=>{
   
    let num=getnum();
    console.log(num,i.className);
    
    if(num>2&&(i.className!=='gon'&&i.className!=="gof"))
    gameOn(i);
    else if(i.className!=='gon'&&i.className!=="gof")
    gameOff(i);
  
}



el.forEach((i)=>{  i.addEventListener("click",check.bind(null,i))})
yes.addEventListener("click",yesf);
no.addEventListener("click",nof);


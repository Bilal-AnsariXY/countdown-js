let start = document.querySelector(".strt");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".rest");
let hh = document.querySelector(".h");
let ss = document.querySelector(".s");
let mm = document.querySelector(".m");

let h = 0;
let m = 0;
let s = 0;

function fun()
{
    s++;
    if(s === 100)
    {
        m++;
        s = 0;
    }
    if(m === 60)
    {
        h++;
        m = 0;
    }
    hh.innerHTML = h < 10 ? `0${h}` : h;
    mm.innerHTML = m < 10 ? `0${m}` : m;
    ss.innerHTML = s < 10 ? `0${s}` : s;
    
}
let x = 0;
start.addEventListener("click",function()
{
    
    if(x === 0)
        {
            x= setInterval(fun,10);

        }    
   else return;
})
stop.addEventListener("click",function()
{
    
    clearInterval(x);
    x = 0;
})
reset.addEventListener("click",function()
{
    

       
        s = 0,m=0,h=0;
        hh.innerHTML = "00"
        ss.innerHTML = "00"
        mm.innerHTML = "00"
    
})


let display=document.getElementById('display')
let current='';
function press(value)
{
    if(display.innerText==='0' ||display.innerText==='error'||display.innerText==='')
    {
        current=''
    }
    if(value=='x')
    {
        current=current.slice(0,current.length-1)
    }
    else
    {
        current+=value;
    }
    display.innerText=current=='' ? '0':current;
}   
function calculate()
{
    try{
        current=eval(current).toString();
        display.innerText=current;
    }
    catch{
        display.innerText='error';
        current='';

    }

}
function clearDisplay()
{
    current='';
    display.innerText='0';
}

var screen=document.getElementById('expr')
var keys=document.querySelectorAll('.keyBox div')
keys.forEach((k)=>{
    k.addEventListener('click',()=>{
        handleEvent(k.innerHTML)
    })
})
var isNotDecimal=true;
function handleEvent(key)
{
    if(key=="=")
       evaluate()
    else if(key=="AC")
       allClear();
    else if(key=="B")
       backSpace()
    else 
    {
        var str=screen.innerHTML;
        if(str=="0")
        {
            screen.innerHTML=""
            str=""
        }
        if(isDigit(key))
           screen.innerHTML+=key;
        else if(key==".")
        {
            if(isNotDecimal)
            {
                if(str==""||(!isDigit(str.charAt(str.length-1))))
                   screen.innerHTML+="0.";
                else 
                {
                   screen.innerHTML+="."
                }
                isNotDecimal=false;
            }
        }
        else
        {
            isNotDecimal=true;
            if(str=="")
                screen.innerHTML+="0"+key;
            else 
            {
                var lastChr=str.charAt(str.length-1);
                if(isDigit(lastChr)||key==".")
                    screen.innerHTML+=key 
                else 
                {
                    str=str.slice(0,-1);
                    str+=key;
                    screen.innerHTML=str;
                }
            }
        }
    }
}
function allClear()
{
    screen.innerHTML="0"
}
function backSpace()
{
    var str=screen.innerHTML;
    if(str.length==1)
       screen.innerHTML="0"
    else
    {
        str=str.slice(0,-1);
        screen.innerHTML=str;
    }
}
function evaluate()
{
    var str=screen.innerHTML
    if(str!="")
    screen.innerHTML=eval(str)
}

function isDigit(k)
{
    if(k=="1"||k=="2"||k=="3"||k=="4"||k=="5"||k=="6"||k=="7"||k=="8"||k=="9"||k=="0")
       return true;
    else 
      return false;
}

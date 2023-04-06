
let m=0;
let h=0;
let s=0;
let cnt=0;
let known= false;

function start(){
    known =true;
    stopwatch();
}

function stop(){
known = false;
}

function reset(){
known = false;
h=0;
s=0;
m=0;
cnt=0;
document.getElementById("count").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";

}

function stopwatch(){
   
  if(known == true)
  {
    cnt = cnt+1;
   
    if(cnt == 100)
    {
        s=s+1;
        cnt =0;

    }
    if(s== 60)
    {
        m=m+1;
        s=0;
    }
    if(m==60)
    {
        h = h+1;
        s =0;
        m=0;

    }
    let hString = h;
    let mString = m;
    let sString = s;
    let cntString = cnt;
    if(h<10)
    {
        hString = "0"+ hString;
    }
    if(m<10)
    {
        mString = "0"+ mString;
    }
    if(s<10)
    {
        sString = "0"+ sString;
    }
    if(cnt<10)
    {
        cntString = "0"+ cntString;
    }

    document.getElementById("count").innerHTML=cntString;
    document.getElementById("sec").innerHTML=sString;
    document.getElementById("min").innerHTML=mString;
    document.getElementById("hr").innerHTML=hString;
    
    setTimeout("stopwatch()",10);

  }
    
}
let fname1=document.getElementById('fname')
let lname1=document.getElementById('lname')
let rad1=document.getElementById('g1')
let rad2=document.getElementById('g2')
let rad3=document.getElementById('g3')
let date=document.getElementById("date1")
let num1=document.getElementById('num1')
let mail=document.getElementById('mail')
let r1=document.getElementById('q1')
let r2=document.getElementById('q2')
let r3=document.getElementById('q3')

let erro1=document.getElementById("error1")
let erro2=document.getElementById("error2")
let erro3=document.getElementById("error3")
let erro4=document.getElementById("error4")
let erro5=document.getElementById("error5")
let erro6=document.getElementById("error6")
let erro7=document.getElementById("error7")
let border1="red 3px solid";
let border2='green 3px solid';

let err='Required'
let erralpha='must have alphabets'


function valid1(){
    erro1.textContent="";
    let fvalue=fname1.value;
    let reg=new RegExp("^[A-Za-z]*$")
    console.log(reg.test(fvalue))
    if (fvalue==''){
        erro1.textContent=err;
        fname1.style.border=border1;
        return false;
    }
    else if (reg.test(fvalue)==false){
        erro1.textContent=erralpha;
        fname1.style.border=border1;
        return false;
    }
    else{
        fname1.style.border=border2
        erro1.textContent='';
        return true;
    }
}
function valid2(){
    if (date.value==''){
        erro2.textContent=err;
        date.style.border=border1;
        return false;
    }else{
        erro2.textContent='';
        date.style.border=border2;
        return true;
    }
}
function valid3(){
    erro1.textContent=''
    let lvalue=lname1.value;
    let reg=new RegExp('^[A-Za-z]*$')
    console.log(reg.test(lvalue))
    if (lvalue==''){
        erro3.textContent='Required';
        lname1.style.border=border1;
        return false;
    }
    else if (reg.test(lvalue)==false){
        erro3.textContent=erralpha;
        lname1.style.border=border1;
        return false;
    }
    else{
        lname.style.border=border2
        erro3.textContent='';
        return true;
    }
}
function valid4(){
    if (rad1.checked || rad2.checked || rad3.checked){
        erro4.textContent='';
        return true
    }else{
        erro4.textContent=err;
        return false
    }

}
function valid7(){
    if (r1.checked || r2.checked || r3.checked){
        erro7.textContent='';
        return true
    }else{
        erro7.textContent=err;
        return false
    }

}
function valid5(){
    let numvalue=num1.value;
    let reg=new RegExp('^[0-9]*$')
    console.log(reg.test(numvalue))
    if (numvalue==''){
        erro5.textContent='Required';
        num1.style.border=border1;
        return false;
    }
    else if (reg.test(numvalue)==false){
        erro5.textContent='the number should contain only numbers';
        num1.style.border=border1;
        return false;
    }
    else if (numvalue.length>10 || numvalue.length<10){
        erro5.textContent='the phone number should be valid';
        num1.style.border=border1;
        return false;
    }
    else{
        num1.style.border=border2
        erro5.textContent='';
        return true;
    }
    
}
function valid6(){
    erro6.innerHtml=''
    let mailvalue=mail.value;
    let sub=mailvalue.substring(mailvalue.indexOf('@')+1);
    console.log(sub)
    if (mailvalue==''){
        erro6.textContent='Required';
        mail.style.border=border1;
        return false;
    }else if(!mailvalue.includes('@')||sub=='') {
        erro6.textContent='Enter valid Email';
        mail.style.border=border1;
        return false;
    }
    else{
        mail.style.border=border2
        erro6.textContent='';
        return true;
    }
    
}

function validation(){
     var p1=valid1()
     var p2=valid2();
     var p3=valid3();
     var p4=valid4();
     var p5=valid5();
     var p6=valid6();
     var p7=valid7();
     return p1 && p2 && p3 && p4  && p5 && p6 &&p7;
}
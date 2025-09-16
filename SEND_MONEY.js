
  let balance = "8563921976.00";
  let d = new Date();

function WB1(){document.getElementById('XV1').style.backgroundColor="rgb(0, 0, 135)";
               document.getElementById('XV1').style.color="white";
               document.getElementById("XV2").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV2").style.color="black";
               document.getElementById("XV3").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV3").style.color="black";
               document.getElementById("XV4").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV4").style.color="black";
               document.getElementById('MATAWIx').style.display='block';
               document.getElementById('MATAWI3').style.display='none';
               document.getElementById('MATAWI2').style.display='none';
               document.getElementById('MATAWI4').style.display='none';
}


function WB2(){document.getElementById('XV2').style.backgroundColor="rgb(0, 0, 135)";
               document.getElementById('XV2').style.color="white";
               document.getElementById("XV1").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV1").style.color="black";
               document.getElementById("XV3").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV3").style.color="black";
               document.getElementById("XV4").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV4").style.color="black";
               document.getElementById('MATAWI2').style.display='block';
               document.getElementById('MATAWI3').style.display='none';
               document.getElementById('MATAWIx').style.display='none';
               document.getElementById('MATAWI4').style.display='none';

}

function WB3(){document.getElementById('XV3').style.backgroundColor="rgb(0, 0, 135)";
               document.getElementById('XV3').style.color="white";
               document.getElementById("XV2").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV2").style.color="black";
               document.getElementById("XV1").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV1").style.color="black";
               document.getElementById("XV4").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV4").style.color="black";
               document.getElementById('MATAWI3').style.display='block';
               document.getElementById('MATAWI2').style.display='none';
               document.getElementById('MATAWIx').style.display='none';
               document.getElementById('MATAWI4').style.display='none';
}

function WB4(){document.getElementById('XV4').style.backgroundColor="rgb(0, 0, 135)";
               document.getElementById('XV4').style.color="white";
               document.getElementById("XV2").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV2").style.color="black";
               document.getElementById("XV3").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV3").style.color="black";
               document.getElementById("XV1").style.backgroundColor="rgb(0, 191, 255)";
               document.getElementById("XV1").style.color="black";
               document.getElementById('MATAWI4').style.display='block';
               document.getElementById('MATAWI2').style.display='none';
               document.getElementById('MATAWIx').style.display='none';
               document.getElementById('MATAWI3').style.display='none';
}


function TRANSFER_1(){

let d = new Date();

let max7 = document.getElementById("MGT").innerText;

let km1 = document.getElementById("MYM1").value;

let zm1 = document.getElementById("MYT1").value;

let GH = zm1;

let GB = km1;

document.getElementById("NOTICE01").innerHTML="<i>⚙️Processing....</i>";

setTimeout(function(){
          if(isNaN(km1)){document.getElementById("NOTICE01").innerHTML="❌Invalid account number...!";
          }else if(km1<100000000){document.getElementById("NOTICE01").innerHTML="❌Invalid account number...!";

          }else if(isNaN(zm1)){document.getElementById("NOTICE01").innerHTML="❌Invalid amount...!";
          }else if(zm1<100){document.getElementById("NOTICE01").innerHTML="Enter amount not less than100.00 TZS";

          }else if(zm1>balance*(4/5)){document.getElementById("NOTICE01").innerHTML="Balance is not enought..!";
          }else{balance-=zm1;

          document.getElementById('HC').style.display="none";

let MMN8 = Number(balance).toLocaleString()+" TZS";
          localStorage.setItem('MMN8',MMN8);

          document.getElementById("J55").innerHTML=MMN8;
          document.getElementById("NOTICE01").innerHTML="<i>✅SENT SUCCESIFULY....</i>";

setTimeout (function(){
          document.getElementById('MATAWI').style.display="none";
          document.getElementById('WVM').style.display="none";
          document.getElementById('MYM1').value="";
          document.getElementById('MYT1').value="";

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="none";
          document.getElementById('Y5').style.display="none";

let SMS9 = "Dear!!..."+ max7 + "<br>You have send succesifully "+Number(GH).toLocaleString()+" TZS to "+GB+ " DEEM BUSINESS CENTER. Total Charges are" + Number((3/100)*GH).toLocaleString() +" TZS, VAT " + Number((1/100)*GH).toLocaleString() +". Refference no.:" +GB+ ". New Balance is "+Number(balance).toLocaleString()+" TZS. Enjoy services when using WANUBI BANK...<br>"+"  "+ d.toDateString()+" ["+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() +"]";
          localStorage.setItem('SMS9',SMS9); 
          
          document.getElementById('MZS').innerHTML=SMS9;
document.getElementById('MIAMALA').innerHTML = document.getElementById('MZS').innerHTML;

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="block";
          document.getElementById('Y5').style.display="block";
          },3000);

          },2000);
      },2500);
  }
},3000);
}


function TRANSFER_2(){

let d = new Date();

let max7 = document.getElementById("MGT").innerText;

let km2 = document.getElementById("MYM2").value;

let zm2 = document.getElementById("MYT2").value;

let GH2 = zm2;

let GB2 = km2;

document.getElementById("NOTICE02").innerHTML="<i>⚙️Processing....</i>";

setTimeout (function(){
          if(isNaN(km2)){document.getElementById("NOTICE02").innerHTML="❌Invalid Number try again...!";

          }else if(km2<600000000){document.getElementById("NOTICE02").innerHTML="❌Invalid Number try again...!";
          }else if(km2>799999999){document.getElementById("NOTICE02").innerHTML="❌Invalid Number try again...!";

          }else if(isNaN(zm2)){document.getElementById("NOTICE02").innerHTML="❌Invalid amount...!";
          }else if(zm2<100){document.getElementById("NOTICE02").innerHTML="Enter amount not less than100.00 TZS";

          }else if(zm2>balance*(4/5)){document.getElementById("NOTICE02").innerHTML="Balance is not enought..!";
          }else{balance-=zm2;

          document.getElementById('HC').style.display="none";

let MMN8 = Number(balance).toLocaleString()+" TZS";
          localStorage.setItem('MMN8',MMN8);

          document.getElementById("J55").innerHTML=MMN8;
          document.getElementById("NOTICE02").innerHTML="<i>✅SENT SUCCESIFULY....</i>";

setTimeout (function(){
          document.getElementById('MATAWI').style.display="none";
          document.getElementById('WVM').style.display="none";
          document.getElementById('MYM2').value="";
          document.getElementById('MYT2').value="";

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="none";
          document.getElementById('Y5').style.display="none";

let SMS9 = "Dear!!..."+ max7 + "<br>You have send succesifully "+Number(GH2).toLocaleString()+" TZS to "+GB2+ " DEEM BUSINESS CENTER. Total Charges are" + Number((3/100)*GH2).toLocaleString() +" TZS, VAT " + Number((1/100)*GH2).toLocaleString() +". Refference no.:" +GB2 + ". New Balance is "+Number(balance).toLocaleString()+" TZS. Enjoy services when using WANUBI BANK...<br>"+"  "+ d.toDateString()+" ["+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() +"]";
          localStorage.setItem('SMS9',SMS9);
          
          document.getElementById('MZS').innerHTML=SMS9;
          document.getElementById('MIAMALA').innerHTML = document.getElementById('MZS').innerHTML;

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="block";
          document.getElementById('Y5').style.display="block";
          },3000);

          },2000);
      },2500);      
  }
},3000);
}



function TRANSFER_3(){

let d = new Date();

let max7 = document.getElementById("MGT").innerText;

let km3 = document.getElementById("MYM3").value;

let zm3 = document.getElementById("MYT3").value;

let GH3 = zm3;

let GB3 = km3;

document.getElementById("NOTICE03").innerHTML="<i>⚙️Processing....</i>";

setTimeout (function(){
          if(isNaN(km3)){document.getElementById("NOTICE03").innerHTML="❌Invalid Agent Number try again...!";

          }else if(km3<100000){document.getElementById("NOTICE03").innerHTML="❌Invalid Agent Number try again...!";
          }else if(km3>999999){document.getElementById("NOTICE03").innerHTML="❌Invalid Number try again...!";

          }else if(isNaN(zm3)){document.getElementById("NOTICE03").innerHTML="❌Invalid amount...!";
          }else if(zm3<100){document.getElementById("NOTICE03").innerHTML="Enter amount not less than100.00 TZS";

          }else if(zm3>balance*(4/5)){document.getElementById("NOTICE03").innerHTML="Balance is not enought..!";
          }else{balance-=zm3;

          document.getElementById('HC').style.display="none";

let MMN8 = Number(balance).toLocaleString()+" TZS";
          localStorage.setItem('MMN8',MMN8);

          document.getElementById("J55").innerHTML=MMN8;
          document.getElementById("NOTICE03").innerHTML="<i>✅SENT SUCCESIFULY....</i>";

setTimeout (function(){
          document.getElementById('MATAWI').style.display="none";
          document.getElementById('WVM').style.display="none";
          document.getElementById('MYM3').value="";
          document.getElementById('MYT3').value="";

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="none";
          document.getElementById('Y5').style.display="none";

let SMS9 = "Dear!!..."+ max7 + "<br>You have send succesifully "+Number(GH3).toLocaleString()+" TZS to "+GB3+ " DEEM BUSINESS CENTER. Total Charges are" + Number((3/100)*GH3).toLocaleString() +" TZS, VAT " + Number((1/100)*GH3).toLocaleString() +". Refference no.:" +GB3+". New Balance is "+Number(balance).toLocaleString()+" TZS. Enjoy services when using WANUBI BANK...<br>"+"  "+ d.toDateString()+" ["+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() +"]";
          localStorage.setItem('SMS9',SMS9);
          
          document.getElementById('MZS').innerHTML=SMS9;
           document.getElementById('MIAMALA').innerHTML = document.getElementById('MZS').innerHTML;

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="block";
          document.getElementById('Y5').style.display="block";
          },3000);

          },2000);
     },2500);
  }
},3000);
}


function TRANSFER_4(){

let d = new Date();

let max7 = document.getElementById("MGT").innerText;

let km4 = document.getElementById("MYM4").value;

let zm4 = document.getElementById("MYT4").value;

let GH4 = zm4;
    
let GB4 = km4;

document.getElementById("NOTICE04").innerHTML="<i>⚙️Processing....</i>"
    
setTimeout(function(){
          if(isNaN(km4)){document.getElementById("NOTICE04").innerHTML="❌Invalid account number...!";
          }else if(km4<100000000){document.getElementById("NOTICE04").innerHTML="❌Invalid account number...!";

          }else if(isNaN(zm4)){document.getElementById("NOTICE04").innerHTML="❌Invalid amount...!";
          }else if(zm4<100){document.getElementById("NOTICE04").innerHTML="Enter amount not less than100.00 TZS";

          }else if(zm4>balance*(4/5)){document.getElementById("NOTICE04").innerHTML="Balance is not enought..!";
          }else{balance-=zm4;

          document.getElementById('HC').style.display="none";

let MMN8 = Number(balance).toLocaleString()+" TZS";
          localStorage.setItem('MMN8',MMN8);

          document.getElementById("J55").innerHTML=MMN8;
          document.getElementById("NOTICE04").innerHTML="<i>✅SENT SUCCESIFULY....</i>";

setTimeout (function(){
          document.getElementById('MATAWI').style.display="none";
          document.getElementById('WVM').style.display="none";
          document.getElementById('MYM4').value="";
          document.getElementById('MYT4').value="";
     
setTimeout (function(){

          document.getElementById('MIAMALA').style.display="none";
          document.getElementById('Y5').style.display="none";

let SMS9 = "Dear!!..."+ max7 + "<br>You have send succesifully "+Number(GH4).toLocaleString()+" TZS to "+GB4+ " DEEM BUSINESS CENTER. Total Charges are " + Number((3/100)*GH4).toLocaleString() +" TZS, VAT " + Number((1/100)*GH4).toLocaleString() +". Refference no.:" +GB4+ ". New Balance is "+Number(balance).toLocaleString()+" TZS. Enjoy services when using WANUBI BANK...<br>"+"  "+ d.toDateString()+" ["+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() +"]";
          localStorage.setItem('SMS9',SMS9);
          
          document.getElementById('MZS').innerHTML=SMS9;
          document.getElementById('MIAMALA').innerHTML = document.getElementById('MZS').innerHTML;

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="block";
          document.getElementById('Y5').style.display="block";
          },3000);

          },2000);
    },2500);
  }
},3000);
}


function DUDU(){
          document.getElementById('MATAWI').style.display="block";
          document.getElementById('HC').style.display="block";
          document.getElementById('WVM').style.display="block";
  
}



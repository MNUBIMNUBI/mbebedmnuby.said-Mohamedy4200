

function wdm(params) {
          document.getElementById("main01").style.display="block";
          document.getElementById("main01").style.backdropFilter="blur(1px)";
          document.getElementById("main02").style.display="block";
}

function TRANSFER_xp(){

let d = new Date();

let max7 = document.getElementById("MGT").innerText;

let xp1 = document.getElementById("kkk3").value;

let xp2 = document.getElementById("zzz3").value;

          document.getElementById("JHHG").innerHTML="<i>⚙️Processing....</i>";

let Gx1 = xp2;

let Gx2 = xp1;

setTimeout (function(){
      if(isNaN(xp1)){document.getElementById("JHHG").innerHTML="❌Invalid Cash-out number, Try again...!";
          }else if(xp1<10000){document.getElementById("JHHG").innerHTML="❌Invalid Cash-out number, try again...!";

          }else if(xp1>9999999999){document.getElementById("JHHG").innerHTML="❌Invalid Cash-out number, again...!";
          }else if(isNaN(xp2)){document.getElementById("JHHG").innerHTML="❌Invalid amount...!";

          }else if(xp2<100){document.getElementById("JHHG").innerHTML="Enter amount not less than100.00 TZS";
          }else if(xp2>balance*(4/5)){document.getElementById("JHHG").innerHTML="Balance is not enought..!";

          }else{balance-=xp2;
          document.getElementById('HC').style.display="none";
          
let MMN8 = Number(balance).toLocaleString()+" TZS";
          localStorage.setItem('MMN8',MMN8);
          document.getElementById("J55").innerHTML=MMN8
          document.getElementById("JHHG").innerHTML="<i>✅SENT SUCCESIFULY....</i>";

setTimeout (function(){
          document.getElementById('main01').style.display="none";
          document.getElementById('main02').style.display="none";
          document.getElementById('kkk3').value="";
          document.getElementById('zzz3').value="";

setTimeout (function(){
          document.getElementById('MIAMALA').style.display="none";
          document.getElementById('Y5').style.display="none";

let SMS9 = "Dear!!..."+ max7 + "<br>Cash-Out succesifully "+Number(Gx1).toLocaleString()+" TZS to "+Gx2+ " DEEM BUSINESS CENTER. Total Charges are" + Number((3/100)*Gx1).toLocaleString() +" TZS, VAT " + Number((1/100)*Gx1).toLocaleString() +". Refference no.:" +Gx2+ ". New Balance is "+Number(balance).toLocaleString()+".00 TZS. Enjoy services when using WANUBI BANK...<br>"+"  "+ d.toDateString()+" ["+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"]" ;
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

function Cancelz(params) {
    document.getElementById("main01").style.display="none";
    document.getElementById("main02").style.display="none";

}



function login_r() {

          document.getElementById("bomba").style.display="block";
          document.getElementById("bombax").style.display="none";
          document.getElementById("bombay").style.display="none";
          document.getElementById("login").style.display="block";
          document.getElementById("sign-in").style.display="block";
    

}

function login_s(params) {
          document.getElementById("bombax").style.display="block";
          document.getElementById("bombay").style.display="none";
          document.getElementById("bomba").style.display="none";
          document.getElementById("login").style.display="block";
          document.getElementById("sign-in").style.display="block";
    
    
}



function logT(event) {
    MK = document.getElementById("supu").value;
    GK = document.getElementById("supu2").value;
    LK = localStorage.getItem('DVD');
    PK = localStorage.getItem('DFD');

if (MK!=PK){document.getElementById("umbea").innerHTML="Invalid Account Numbe...!!";
}else if(GK!=LK){document.getElementById("umbea").innerHTML="Invalid  password...!!";
}else{
  document.getElementById("before6").style.display="none";
  document.getElementById("main01").style.display="none";
  document.getElementById("main01").style.backdropFilter="blur(0)";
}
    
}


function gravit(params) {
    
         let x,G,P,N,T,Z,W,L;

         Z = document.getElementById("PWordc").value; 
         W= document.getElementById("C_Wordc").value;
         T = document.getElementById("BUSINESS44").value;
         G = document.getElementById("MALEc").value;        
         x = document.getElementById("FullNamec").value;
         P = document.getElementById("PHONEc").value;
         Q = W.length;
         D = Z.length
         L = document.getElementById("STATUSc").innerHTML="✅well done! you have created new account....💯";
         N = 82498585876-P;
         const JBL = x;
       if( x<=2){ document.getElementById("STATUSc").innerHTML="❌Invalid Customer Name....!!!";
                }else if(x>0){document.getElementById("STATUSc").innerHTML="❌Invalid Customer Name....!!!";
                             }else if(P<=600000000){document.getElementById("STATUSc").innerHTML="❌Phone number is invalid!!!<br>start with 06xxxxxxxx or 07xxxxxxxx";
                            }else if(isNaN(P)){document.getElementById("STATUSc").innerHTML="❌Phone number is invalid!!!<br>put a correct number";
                             }else if(P==7000000000){document.getElementById("STATUSc").innerHTML="❌Phone number is invalid!!";
                             }else if(P>799999999){document.getElementById("STATUSc").innerHTML="❌Phone number is invalid!!!<br>start with 06xxxxxxxx or 07xxxxxxxx";
                             }else if (G==1){document.getElementById("STATUSc").innerHTML="🪧Choose region of registration continue....!!!";
                             }else if (T==2){document.getElementById("STATUSc").innerHTML="🪧Choose account type  to Continue...!!";
                             }else if (Q<=5){document.getElementById("STATUSc").innerHTML="🪧Password need above six characters...!!!<br>🔐 Enter again";
                             }else if (Z!=W){document.getElementById("STATUSc").innerHTML=" ❎Your Passord not match....!!!<br>🔐 Plz make it clear...!!!";
                             }else {let VF = "IBU"+N;
                                    let XD = x;
                                    let DVD = Z;
                                    let DFD = N;
                                    let GGF = P;
                                    let PPF = G;
                                    
                                    
                                    localStorage.setItem('DFD',DFD);
                                    localStorage.setItem('GGF',GGF);
                                    localStorage.setItem('PPF',PPF);
                                    localStorage.setItem('DVD',DVD);
                                    localStorage.setItem('XD',XD);
                                    localStorage.setItem('VF',VF);

                                    localStorage.getItem('VF');
                                    localStorage.getItem('GGF');
                                    localStorage.getItem('PPF');
                                    localStorage.getItem('XD');
                                    localStorage.getItem('DVD');
                                    localStorage.getItem('DFD');
                                    
                                    document.getElementById("hiden").innerHTML=DVD; 
                                    document.getElementById("MGT").innerHTML=XD;
                                    document.getElementById("userx").value=N;
                                     document.getElementById("MOX").innerHTML=VF;
                                     document.getElementById("WanubiCard").style.visibility="visible";
                                     document.getElementById("RLZ").innerHTML=PPF;
                                     document.getElementById("TYPX").innerHTML=T;
                                     document.getElementById("J55").innerHTML="8,563,921,976.00"+"TZS";

                                     document.getElementById("POG").innerHTML=GGF;
                                     M = document.getElementById("reset1c").style.display="none";
                                     K = document.getElementById("BFT3c").style.display="none";
                                     J = document.getElementById("ZTXc").style.display="block";
                                     document.getElementById("COUNTRY4x").innerHTML=PPF;

          
          document.getElementById("QNM1").innerHTML=N;
          document.getElementById("supu").value=N;
          document.getElementById("QNM2").innerHTML=x;
          document.getElementById("bombay").style.display="block";
          document.getElementById("bombax").style.display="none";
          document.getElementById("bomba").style.display="none";
          document.getElementById("login").style.display="none";
          document.getElementById("sign-in").style.display="none";
    
                                        }

    
}
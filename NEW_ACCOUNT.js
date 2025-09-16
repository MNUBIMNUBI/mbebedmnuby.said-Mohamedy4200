function DEE(){
         let x,G,P,N,T,Z,W,L;

         Z = document.getElementById("PWord").value; 
         W= document.getElementById("C_Word").value;
         T = document.getElementById("BUSINESS4").value;
         G = document.getElementById("MALE").value;        
         x = document.getElementById("FullName").value;
         P = document.getElementById("PHONE").value;
         Q = W.length;
         D = Z.length
         L = document.getElementById("STATUS").innerHTML="✅well done! you have created new account....💯";
         N = 82498585876-P;
         const JBL = x;
       if( x<=2){ document.getElementById("STATUS").innerHTML="❌Invalid Customer Name....!!!";
                }else if(x>0){document.getElementById("STATUS").innerHTML="❌Invalid Customer Name....!!!";
                             }else if(P<=600000000){document.getElementById("STATUS").innerHTML="❌Phone number is invalid!!!<br>start with 06xxxxxxxx or 07xxxxxxxx";
                            }else if(isNaN(P)){document.getElementById("STATUS").innerHTML="❌Phone number is invalid!!!<br>put a correct number";
                             }else if(P==7000000000){document.getElementById("STATUS").innerHTML="❌Phone number is invalid!!";
                             }else if(P>799999999){document.getElementById("STATUS").innerHTML="❌Phone number is invalid!!!<br>start with 06xxxxxxxx or 07xxxxxxxx";
                             }else if (G==1){document.getElementById("STATUS").innerHTML="🪧Choose region of registration continue....!!!";
                             }else if (T==2){document.getElementById("STATUS").innerHTML="🪧Choose account type  to Continue...!!";
                             }else if (Q<=5){document.getElementById("STATUS").innerHTML="🪧Password need above six characters...!!!<br>🔐 Enter again";
                             }else if (Z!=W){document.getElementById("STATUS").innerHTML=" ❎Your Passord not match....!!!<br>🔐 Plz make it clear...!!!";
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
                                     document.getElementById("MOX").innerHTML=VF;
                                    document.getElementById("supu").value=N;
                                    document.getElementById("usery").value=N;
                                     document.getElementById("WanubiCard").style.visibility="visible";
                                     document.getElementById("RLZ").innerHTML=PPF;
                                     document.getElementById("TYPX").innerHTML=T;
                                     document.getElementById("J55").innerHTML="8,563,921,976.00"+"TZS";

                                     document.getElementById("POG").innerHTML=GGF;
                                     M = document.getElementById("reset1").style.display="none";
                                     K = document.getElementById("BFT").style.display="none";
                                     J = document.getElementById("ZTX").style.display="block";
                                     document.getElementById("COUNTRY4x").innerHTML=PPF;
                                        }

}

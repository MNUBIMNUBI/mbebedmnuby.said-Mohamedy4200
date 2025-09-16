function Change8(){
let qy = document.getElementById("P_pro").value;
let qz = document.getElementById("P_pro2").value;
let qc = document.getElementById("P_pro2").value;
let qx = qy.length;
if(qy==""){document.getElementById("ATTEMPT").innerHTML="Enter the password....! ";
}else if(qx<"6"){document.getElementById("ATTEMPT").innerHTML="Password need above six characters...";
}else if(qz==""){document.getElementById("ATTEMPT").innerHTML="Cormfim Your password....!! ";
}else if(qy!=qz){document.getElementById("ATTEMPT").innerHTML="Your Password not match. Plz make it clear....";
}else{
    let DVD = qz;
    localStorage.setItem('DVD',DVD);
    
    let JOKA=localStorage.getItem('DVD');
    let GDS=localStorage.getItem('DVD');

    document.getElementById("supu").innerHTML=GDS;
     document.getElementById('hiden').innerHTML=JOKA;

    document.getElementById("SOKO3").innerHTML='*********';
     document.getElementById('nyoka').style.display='block';
     document.getElementById('FMX').style.display='none';
}
}

function End(){
    document.getElementById("SOKO3").innerHTML='******';
    document.getElementById("P_pro").value="";
    document.getElementById("P_pro2").value="";
    document.getElementById('pro1').style.display='none';
    document.getElementById('SECURITY_PRO').style.display='none';
     document.getElementById('nyoka').style.display='none';
    }

function Start(){
    
     document.getElementById('NEWX').style.display='none';
     document.getElementById('Y3').style.display="none";
     document.getElementById('NEW2').style.display='none';
    document.getElementById('pro1').style.display='block';
     document.getElementById('FMX').style.display='block';
    document.getElementById('SECURITY_PRO').style.display='block';
}

function prevx() {
       document.getElementById("SOKO3").innerHTML=document.getElementById("hiden").innerHTML;
    
}
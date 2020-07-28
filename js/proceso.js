function dato()
{
    var c=Number(document.getElementById('cant').value);
    var m=document.getElementById('marc').value;
    var ic=m;
        if(m==0){
            ic=c*14.5   
        }
        if(m==1){
            ic=c*12.6
        }
        if(m==2){
            ic=c*10.0
        }
        if(m==3){
            ic=c*12.8
        }
    
    document.getElementById("impc").value=ic.toFixed(2); 
    

}
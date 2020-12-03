function printTime() {
    var d = new Date(); // nieuwe date creëren
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    
        switch (day){
        
            case 0:
                day = "Zondag";
                break;
            case 1:
                day = "Maandag";
                break;
            case 2:
                day = "Dinsdag";
                break;
            case 3:
                day = "Woensdag";
                break;
            case 4:
                day = "Donderdag";
                break;
            case 5:
                day = "Vrijdag";
                break;
            case 6:
                day = "Zaterdag";
                break;
           }
    
    
        if(hours<10){
            hours = "0" + hours;
        }
        if(mins<10){
            
            mins = "0" + mins;
        }
        if(secs<10){

            secs = "0" + secs;
        } 
   month = month + 1;

   document.getElementById("klok").innerHTML = hours+":"+mins+":"+secs;
   document.getElementById("dag").innerHTML = day + ", " + date + "." + month + "." + year
}
setInterval(printTime, 1000);
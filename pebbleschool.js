var rocky = require('rocky');

var notifytext = "Problem";
var currentlesson = "-----";
var nextlesson = "-----";
var day = "Mon";
var period = 1;
// TODO: me change these for each period!
var MonPeriod = ["1108", "indoor pe", "2204", "2110", "2108"];
var TuePeriod = ["2033", "1023", "1108", "2020", "2204"];
var WedPeriod = ["outdoor pe", "2116", "2110", "2229", "2218"];
var ThurPeriod = ["1009", "2204", "2127", "2124", "1108"];
var FriPeriod = ["2108", "1009", "Form", "Drama", "2127"];
var Days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var FullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function minutesUntilSchoolStart() {
    var midnight = new Date();
    midnight.setHours( 8 );
    midnight.setMinutes( 45 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );
    return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
}
function minutesUntilLunchEnd() {
    var midnight = new Date();
    midnight.setHours( 13 );
    midnight.setMinutes( 15 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );
    return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
}
function minutesUntilSchoolEnd() {
    var midnight = new Date();
    midnight.setHours( 15 );
    midnight.setMinutes( 25 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );
    return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
}
function updateOOSM(){ 
   notifytext = "";  
       var d = new Date();
   var datet = d.toLocaleTimeString(undefined, {hour: 'numeric'});
      var datem = d.toLocaleTimeString(undefined, {minute: 'numeric'});
        if (((datet >= 0) && (datem > 5))) {
          //Notify at 12:05AM > 6:30AM (usual fast asleep time)
    
     notifytext = "Night";
   
   }
         if (datet >= 6) {
    
    
     notifytext = "Early morning";

   }
           if (((datet >= 7) && (datem > 10))) {
    if (day != "Sat") {
        if (day != "Sun") {
          notifytext = "School Mode starts soon.";
    } else {
      notifytext = "Swimming + Chior today";
    }
    } else {
      notifytext = "DMC today";
    }
    
    

   }
  // Dismiss once 10AM
    if (((datet >= 10))) {
           notifytext = "School mode off";
    }

}
 function updatelessons() {
     var d = new Date();
   var datet = d.toLocaleTimeString(undefined, {hour: 'numeric'});
      var datem = d.toLocaleTimeString(undefined, {minute: 'numeric'});
   notifytext = "Week A";
    if (day == "Sun") {
    period = 0;
   return;
  }
     if (day == "Sat") {
    period = 0;
             return;
  }
     if (day == "Mon") {
  currentlesson = MonPeriod[period - 1];
  nextlesson = MonPeriod[period];      
  }
        if (day == "Tue") {
  currentlesson = TuePeriod[period - 1];
      nextlesson = TuePeriod[period];   
  }
         if (day == "Wed") {
  currentlesson = WedPeriod[period - 1];
   nextlesson = WedPeriod[period];      
  }
            if (day == "Thur") {
  currentlesson = ThurPeriod[period - 1];
    nextlesson = ThurPeriod[period];     
  }
            if (day == "Fri") {
  currentlesson = FriPeriod[period - 1];
        nextlesson = FriPeriod[period]; 
  }
    notifytext = "Week A";
 if ((datet == 8) && (datem >= 15) && (datem < 45)) {
 //  if (true) {
     period = 1;
    
     notifytext =  Math.round(minutesUntilSchoolStart()) + " mins to get to school.";
       return;
   }
   if ((datet == 8) && (datem >= 45)) {
     period = 1;
    
     notifytext = "Registration...";
       return;
   }
     if ((datet == 9) && (datem >= 0) && (datem < 5)) {
     period = 1;
    
     notifytext = "Get to Period 1!";
       return;
   } 
        if (((datet == 9) && (datem > 5))) {
     period = 1;
    
     notifytext = "Week A";
       return;
   }
   if ((datet == 10) && (datem < 5)) {
       period = 1;
    
     notifytext = "Week A";
       return;
   }
        if ((datet == 10) && (datem >= 5) && (datem < 10)) {
     period = 2;
    
     notifytext = "Get to Period 2!";
       return;
   } 
     if (((datet == 10) && (datem > 10))) {
     period = 2;
    
     notifytext = "Week A";
       return;
   }
   if ((datet == 11) && (datem < 10)) {
         period = 2;
    
     notifytext = "Week A";
       return;
   }
           if ((datet == 11) && (datem >= 10) && (datem < 25)) {
     period = 3;
    
     notifytext = "Break";
       return;
   }
              if ((datet == 11) && (datem >= 25) && (datem < 30)) {
     period = 3;
    
     notifytext = "Get to Period 3!";
       return;
   } 
       if (((datet == 11) && (datem > 30))) {
     period = 3;
    
     notifytext = "Week A";
       return;
   }
   if ((datet == 12) && (datem < 30)) {
         period = 3;
    
     notifytext = "Week A";
       return;
   }
          if (((datet == 12) && (datem >= 30))) {
     period = 4;
    
     notifytext = "Lunch - " + Math.round(minutesUntilLunchEnd()) + " mins left";
       return;
   }
   if ((datet == 13) && (datem < 15)) {
           period = 4;
    
     notifytext = "Lunch - " + Math.round(minutesUntilLunchEnd()) + " mins left";
       return;
       }
  
              if ((datet == 13) && (datem >= 15) && (datem < 20)) {
     period = 4;
    
     notifytext = "Get to Period 4!";
       return;
   }
     if (((datet == 13) && (datem > 20))) {
     period = 4;
    
     notifytext = "Week A";
       return;
   }
   if ((datet == 14) && (datem < 20)) {
         period = 4;
    
     notifytext = "Week A";
       return;
   }
   
              if ((datet == 14) && (datem >= 20) && (datem < 25)) {
     period = 5;
    
     notifytext = "Get to Period 5!";
       return;
   }
    if (((datet == 14) && (datem > 25))) {
   
     period = 5;
    
     notifytext = "Last period!";
       return;
      }
        if ((datet == 15) && (datem <=25)) {
          period = 5;
          notifytext = Math.round(minutesUntilSchoolEnd()) + " mins till end";
          return;
   } else {
     period = 0; // Btw period 0 means no school :)
   }
 }
rocky.on('draw', function(event) {
  var ctx = event.context;
  var d = new Date();

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;


  ctx.fillStyle = 'white';

  // Center align the text
  ctx.textAlign = 'center';
updatelessons();
 //Draw Text
if (period != 0) { 


  if (period < 5) {

  } else {
    nextlesson = "END!";
    ctx.fillText(day + " @ 15:25", w / 2, 100, w);
  }

 
} else {
  
nextlesson = "";
  currentlesson ="";
  //21px Roboto
     ctx.fillStyle = 'white';
    ctx.font = '20px bold Leco-numbers';
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getYear()-100; //-100 BECAUSE Y2K SHIZA

if(dd<10) {
    dd = ' '+dd;
} 

if(mm<10) {
    mm = ' '+mm;
} 

today = dd + '/' + mm + '/' + yyyy;
  /*
  OLD VERSION
 ctx.fillText(today, w / 2, (h / 2) + 5, w);
     ctx.fillStyle = 'white';
    ctx.font = '18px Gothic';
  ctx.fillText(FullDays[d.getDay()], w / 2, (h / 2) - 40, w);
      ctx.fillStyle = 'red';
    ctx.font = '14px Gothic';
 
  ctx.fillText(notifytext, w / 2, 140, w);
  */
   updateOOSM(); // Update out of school message
}
  

  // Draw numbers
    ctx.fillStyle = 'white';
  ctx.font = '49px Roboto-subset';
  ctx.fillText("09", w / 2, 10, w);
  ctx.fillText("53", w / 2, 60, w);
    ctx.font = '21px Roboto';
  ctx.fillText("21st Sept", w / 2, 110, w);

    ctx.font = '14px Gothic';
      ctx.fillText(notifytext, w / 2, 130, w); 
  if (period != 0) {
      ctx.fillText(currentlesson + "/" + nextlesson, w / 2, 140, w); 
  }



  day = Days[d.getDay()];




});

rocky.on('secondchange', function(event) {
  // Request the screen to be redrawn on next pass
//DO NOT PUT ANYTHING HERE OR BATTERY LIFE WILL BE FORKED
});

rocky.on('minutechange', function(event) {
  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});

//hour
// if time is between 6am and 12pm print good morning
//if time is between 12pm and 4pm good afternoon
//otherwise good evening

let time = parseInt(prompt("enter current time"));
if(isNaN(time))
  alert("invalid data enter an interger");
  
else
  if(time >=6 && time < 12)
    console.log("Good morning");
  else if(time >12 && time <16)
    console.log("Good afternoon");
  else
    console.log("Good evening");
  

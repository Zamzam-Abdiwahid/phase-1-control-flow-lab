function scuberGreetingForFeet(feet){
    if(feet <=400){
      return "This one is on me!";
    }
    else if (400<feet  && feet <2000){
      return "That will be twenty bucks.";
    }
    else if(feet > 2000 && feet < 2500){
      return "I will gladly take your thirty bucks.";
    }
    else if (feet >2500){
      return "No can do.";
    }
    
}

function ternaryCheckCity(city){
  if(city =="NYC"){
    return "Ok, sounds good.";
  }
  else if (city != "NYC"){
    return "No go.";
  }
  else (city =="Pittsburgh")
    return "No go.";
  
}

function switchOnCharmFromTip(Tip){
  switch(Tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    case "thanks for everything": 
     return "Bye.";
     default:
      return "Bye.";
  }

}